We're pitching to Tehnopol our project

1. 1min for your elevator pitch+team introduction
2. 1min for your business plan
3. 1min for the 6-month plan, what you would like to achieve during the AI Accelerator program, please divide your steps month by month


## AI Accelerator plan

Generally our goal is to make Gratheon more **production- and GTM ready** (eg. first paying customers!)

Splitting by products and services, our top priorities that we want to solve within these 6 months are:

### Entrance observer
- build a working pipeline for bee counting on the edge (nvidia orin)
  https://github.com/Gratheon/entrance-observer/issues/2
  https://github.com/Gratheon/entrance-observer/issues/6
- Send telemetry API to web-app
- Display counts it in web-app
- Validate that inferencing is realtime
  https://github.com/Gratheon/entrance-observer/issues/8

> Why: This should allow us to offer a product (entrance camera + GPU) and service for sale while making smallest development effort. This will also be an example for future iterations and devices to decrease cost/energy efficiency of such devices (like ESP32 cam, raspberry pi) 


## Web-app

- improve queen detection from photos. Currently we use Clarifai-trained and hosted model, but dataset is small and precision is not the best.
  
- **solve AI model stability** (depends on infrastructure) - currently models are failing as they do not have enough resources
	- try Clarifai cloud hosting
	- try hosting models on own infrastructure
	- keep using CPU
- fix queen toggling
- fix basic statistics display

> Why: This is mainly bugfixing and increasing value of the web-app for customers that want to only manage their apiary data from frame photos, receive good-enough statistics in meaningful timeframes.


## IoT sensors device
- add prophet model to predict future hive weight
- add alerting in case of anomalies (sudden loss of )


## Expectations from AI Accelerator
- Receive mentorship on AI topics