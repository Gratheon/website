## Background

Queenless colony in a good scenario will create queen cups and create new queens. In worst case it can lead to workers laying eggs. So if beekeeper would get alerted, he should intervene and add a new queen.

## Goal

We want to detect queen on beehive frame to know if bee colony is queenless or not, as this can kill a colony if left untreated.

We currently use [https://github.com/Gratheon/models-bee-detector](https://github.com/Gratheon/models-bee-detector) model that can detect queens, but its precision is quite poor. It is based on [https://universe.roboflow.com/matt-nudi/honey-bee-detection-model-zgjnb](https://universe.roboflow.com/matt-nudi/honey-bee-detection-model-zgjnb) dataset and weights. We need a good precision to not get false-positive results.

## AC

- have high-precision bee queen detection AI model
- integrate it in web-app