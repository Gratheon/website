---
title: 🌡️ Beehive IoT sensors
sidebar_position: 3
hide_table_of_contents: true
---
## Architecture

### Services
- [https://github.com/Gratheon/hardware-beehive-sensors](https://github.com/Gratheon/hardware-beehive-sensors) - sensors repo on client side
- [https://github.com/gratheon/telemetry-api](https://github.com/gratheon/telemetry-api) - server side

```mermaid
flowchart LR
	beehive-sensors[<a href="https://github.com/Gratheon/beehive-sensors">beehive-sensors</a>] -."send aggregate (5sec)\n metric value".-> telemetry-api

	telemetry-api --"update beehive entrance daily traffic counters"--> mysql[(<a href="https://github.com/Gratheon/mysql">mysql</a>)]
	telemetry-api --"store bee traffic timeseries" --> influx[(<a href="https://github.com/Gratheon/grafana">influx</a>)]
	grafana[(<a href="https://github.com/Gratheon/grafana">grafana</a>)] --"fetch history"--> influx

	telemetry-api --"verify API tokens for REST calls"--> user-cycle[<a href="https://github.com/Gratheon/user-cycle">user-cycle</a>]
	web-app[<a href="https://github.com/Gratheon/web-app">web-app</a>] --"display advanced configureable graphs"--> grafana
	web-app --"query for simplistic metrics\nPOST graphql"-->graphql-router[<a href="https://github.com/Gratheon/graphql-router">graphql-router</a>]--> telemetry-api

```


## Dev setup

- download [Arduino IDE](https://www.arduino.cc/en/software)
- under preferences, set this URL as extra sources [https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json](https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json)
- Make sure to change Arduino IDE upload speed to 115200 under Tools

![](../img/Screenshot%202024-07-22%20at%2003.42.43.png)


<iframe width="100%" height="400" src="https://www.youtube.com/embed/xPlN_Tk3VLQ" title="Introduction to ESP32 - Getting Started" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>