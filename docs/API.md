---
title: 🔗 API
sidebar_position: 0
---
Lets setup your devices to interact with Gratheon!

You can also see how exactly we process this data - check out our architecture, services, code, reasons to choose one solution over another. If you are technical enough and find this useful, feel free to improve these guides in github or even add new ones.

## Quickstart
To access our API, you will need to generate API token in [user profile](https://app.gratheon.com/account). Tokens allow us to authenticate you and have ratelimiting. You must pass this token in `Authorization` http header and have `Bearer ` as prefix, for example:

![](img/Screenshot%202024-12-08%20at%2001.01.08.png)


## GraphQL API
We use federated GraphQL as main flexible way to query and modify web-app data. You can explore its schema directly at https://graphql.gratheon.com/graphql

### Listing apiaries

Here is a CURL example that simply lists apiaries:

```bash
curl --location 'https://graphql.gratheon.com/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```


This API is most flexible, but it is also changing often and can introduce breaking changes

<iframe src="https://graphql.gratheon.com/graphql" width="100%" height="700"></iframe>


## REST APIs
In addition to GraphQL API, we do have microservice-specific separate REST APIs for various reasons, like efficiency, reliability, stability, traditional approach, simplicity for the client, limitations on sending binary data through graphql-router.

REST API should be more fixed in time compared to GraphQL, but these APIs are very limited in their use-cases
### Telemetry 
[IoT sensors](beehive-sensors/beehive-sensors.md) can use this API to send temperature, weight and other timeseries data.

```
POST https://telemetry.gratheon.com/metric/HIVE_ID?api_token=API_TOKEN

{
	"hive_id": 123,
	"fields":{ "temperature":31.25, "weight": 82.34 }
}
```