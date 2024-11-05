This task is one of the main features of the [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21) product

## Goal

We want to efficiently do inferencing on the device

- **track bees**
- **count how many have gone in and out**
    - calculate how many bees did not return per day (bee loss)

## Out of scope

- detect [Robbing behaviour alert based on bee counter](https://www.notion.so/Robbing-behaviour-alert-based-on-bee-counter-78b978ebf0e246ef83244d02ed7c0c1c?pvs=21) based on amount of incoming bees > outgoing
- detect bees with pollen
- detect wasps
- detect hornets - [Hornet attack detection](https://www.notion.so/Hornet-attack-detection-8dde7e03f80547fa9156ac1c16cf52af?pvs=21)

## AC

- Own edge device with GPU
- Device should be able to detect bees coming in/out of hive
- Device should send results to web-app [Telemetry API](https://www.notion.so/Telemetry-API-5d60632841534620ba56d1bb296af98b?pvs=21)

## Suggested solutions

- Yolo v8 [https://docs.ultralytics.com/guides/object-counting/](https://docs.ultralytics.com/guides/object-counting/)
- Use existing [https://github.com/Gratheon/models-gate-tracker](https://github.com/Gratheon/models-gate-tracker) CNN based model

## Related inspiration topics

- [**LabelBee: a web platform for large-scale semi-automated analysis of honeybee behavior from video**](https://www.notion.so/LabelBee-a-web-platform-for-large-scale-semi-automated-analysis-of-honeybee-behavior-from-video-d4e940ed7aee48a6821507ceaa43e603?pvs=21)
- [Apic.ai](https://www.notion.so/Apic-ai-7859a940fd644a3fa35008fd3a2f1909?pvs=21)