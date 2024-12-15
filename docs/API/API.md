---
title: 🔗 API
sidebar_position: 0
---
Lets setup your devices to interact with Gratheon!

You can also see how exactly we process this data - check out our architecture, services, code, reasons to choose one solution over another. If you are technical enough and find this useful, feel free to improve these guides in github or even add new ones.

## Quickstart
To access our API, you will need to generate API token in [user profile](https://app.gratheon.com/account). Tokens allow us to authenticate you and have ratelimiting. You must pass this token in `Authorization` http header and have `Bearer ` as prefix, for example:

```bash
curl --location 'https://graphql.gratheon.com/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```

![](./img/Screenshot%202024-12-08%20at%2001.01.08.png)


## REST APIs

[IoT sensors](beehive-sensors/beehive-sensors.md) can use this API to send temperature, weight and other timeseries data.

```bash
curl --location 'https://telemetry.gratheon.com/metric' \
--header 'Authorization: Bearer API_TOKEN_HERE'
--data '{
"hive_id": 123,
"fields":{ "temperature_celsius":31.25, "weight_kg": 82.34 }
}'
```