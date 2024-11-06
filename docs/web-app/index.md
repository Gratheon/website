---
sidebar_position: 1
title: 📱 Web-app
---
> Goal of this document is to kickstart your development of the web-app as an engineer
## Environment prerequisites

💡 You will need Linux or Mac OSX with **Docker** to develop [Web-app](https://www.notion.so/Web-app-2937ed264e1d434a8664caa4bc40978e?pvs=21) services

To develop [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21) video processing services you’ll need [Jetson Orin Nano](https://www.notion.so/Jetson-Orin-Nano-0432edfb44f748a6874c41ddefa7f69c?pvs=21) or [Jetson Nano](https://www.notion.so/Jetson-Nano-6500eadfbab64e7b8bd0d0896df30701?pvs=21) to have GPU support and docker image compatibility

## Architecture
### Core services

The following services are mandatory, you will need to git-checkout them and start in the following order:

- mysql ← provides storage for other node and go services
- redis ← provides a pub-sub and caching layer
- graphql-schema-registry ← stores graphql schema of microservices
- graphql-router ← routes API requests to other microservices using a [graphql federation](https://www.apollographql.com/docs/federation/), which basically means that requests are split and routed to the microservice that is responsible for particular part of the schema

### Core services and routing

```mermaid
flowchart LR
	web-app --"read/write data \n on client side via dexie"--> indexed-db[(indexed-db)]
	web-app("<a href='https://github.com/Gratheon/web-app'>web-app</a>\n:8080") --> graphql-router
	web-app --"subscribe to events\n over websockets"--> event-stream-filter("<a href='https://github.com/Gratheon/event-stream-filter'>event-stream-filter</a>\n:8300\n:8350") --"listen to events"--> redis

	some-product-service --"publish events"--> redis
	graphql-router --"read service schemas"--> graphql-schema-registry("<a href='https://github.com/tot-ra/graphql-schema-registry'>graphql-schema-registry</a>\n<a href='http://localhost:6001/'>:6001</a>\n")
	graphql-router -.-> some-product-service --"read/write data"--> mysql
	some-product-service --"update schema"--> graphql-schema-registry
```



### Product services

- go-api ← main service that manages domain entities like apiary, hive, hive section, frame, frame side
- image-splitter ← main service that manages image processing + stores data on the detected objects in the frame photo

Note that some service may still be in development and can be unstable or only in draft phase (video processing for example)

```mermaid
flowchart LR
	graphql-router("<a href='https://github.com/Gratheon/graphql-router'>graphql-router</a>\n :6100") --> swarm-api("<a href='https://github.com/Gratheon/swarm-api'>swarm-api</a>\n:8100") --> mysql[(mysql\n:5100)]
	graphql-router --> swarm-api --> redis[("<a href='https://github.com/Gratheon/redis'>redis pub-sub</a>\n:6379")]

	graphql-router --> image-splitter("<a href='https://github.com/Gratheon/image-splitter'>image-splitter</a>\n:8800") --> mysql

	web-app --"upload frames"--> image-splitter --> aws-s3
	image-splitter --"inference"--> models-bee-detector("<a href='https://github.com/Gratheon/models-bee-detector'>models-bee-detector</a>\n:8700")
	image-splitter --"inference"--> models-frame-resources("<a href='https://github.com/Gratheon/models-frame-resources'>models-frame-resources</a>\n:8540")
	graphql-router --> user-cycle("<a href='https://github.com/Gratheon/user-cycle'>user-cycle</a>\n:4000") --> mysql
	graphql-router --> user-cycle --> stripe
	graphql-router --> plantnet("<a href='https://github.com/Gratheon/plantnet'>plantnet</a>\n:8090") --> mysql

	graphql-router --> weather("<a href='https://github.com/Gratheon/weather'>weather</a>\n:8070")

```


### Video processing, playback and analytics

```mermaid
flowchart LR
	web-app("<a href='https://github.com/Gratheon/web-app'>web-app</a>\n:8080") --"fetch video streams"--> graphql-router("<a href='https://github.com/Gratheon/graphql-router'>graphql-router</a>") --"list video stream URLs"--> gate-video-stream -- "get data for playback" --> mysql

	web-app --"record & upload \n 10s webcam video"--> gate-video-stream("<a href='https://github.com/Gratheon/gate-video-stream'>gate-video-stream</a>\n:8900") --"inference video"--> models-gate-tracker("<a href='https://github.com/Gratheon/models-gate-tracker'>models-gate-tracker</a>")

	gate-video-stream --"store video re-training with 1 month TTL"--> aws-s3
	gate-video-stream --"store results long-term" --> mysql

	beehive-entrance-video-processor("<a href='https://github.com/Gratheon/beehive-entrance-video-processor'>beehive-entrance-video-processor</a>") --"record & upload 10s video chunks\nsend edge-computed telemetry"--> gate-video-stream

	beehive-entrance-video-processor -."send detected bees \n timeseries counts".-> telemetry-api("<a href='https://github.com/Gratheon/telemetry-api'>telemetry-api</a>")

	web-app --"include analytics page"--> grafana("<a href='https://github.com/Gratheon/grafana'>grafana</a>\n:9000") --"read bee traffic over time"--> influxdb("influxdb:5300")
```



## Local development setup

- Start by checking out [https://github.com/gratheon/web-app](https://github.com/gratheon/web-app). Its just a react single-page app and does not need a docker image but you can see API dependencies it will require. Checkout its [README.md](http://README.md) “development” section to run it. You should be able to get to the login page, but since it doesn’t have a backend yet, you won’t be able to login
- Next, checkout all of the core dependent services based on the architecture diagram to understand how services on the backend are connected

After checkout

- For every service, you’ll need to run `make start` to start docker container
- For every service, you’ll likely need to set `src/config/config.dev.ts` that was not commited to the repository. Configs typically include credentials to access DB, AWS S3 or external services

💡 Note that some services run DB migrations when they start-up, so make sure you have mysql running and databases pre-created with valid user access. Note that most services do not yet re-connect to mysql automatically, so you need to start services in correct order or restart pod

<iframe width="100%" height="400" src="https://www.youtube.com/embed/4awyyk8sWho" title="Gratheon all-hands v1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Optional services

Some services are not blocking the UI or backend in general, but are required for some specific features, so you may need depending on your work:

- models-bee-detector ← detects bees
- event-stream-filter ← sends events to frontend
- gate-video-stream
- models-gate-tracker

![](../img/Screenshot%202024-04-08%20at%2012.29.45.png)