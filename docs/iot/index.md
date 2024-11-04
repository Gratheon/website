---
title: 🌡️ Beehive IoT sensors
sidebar_position: 3
hide_table_of_contents: true
---

## Main code repos
- [https://github.com/gratheon/telemetry-api](https://github.com/gratheon/telemetry-api) - server side
- [https://github.com/Gratheon/hardware-beehive-sensors](https://github.com/Gratheon/hardware-beehive-sensors) - sensors repo on client side

```mermaid
flowchart LR
	hardware-beehive-sensors[<a href="https://github.com/Gratheon/hardware-beehive-sensors">hardware-beehive-sensors</a>] -."send aggregate (5sec)\n metric value".-> telemetry-api

	telemetry-api --"update beehive entrance daily traffic counters"--> mysql[(<a href="https://github.com/Gratheon/mysql">mysql</a>)]
	beehive-entrance-video-processor[<a href="https://github.com/Gratheon/beehive-entrance-video-processor">beehive-entrance-video-processor</a>] -."send entrance\n traffic metric".-> telemetry-api
	telemetry-api --"store bee traffic timeseries" --> influx[(<a href="https://github.com/Gratheon/grafana">influx</a>)]
	grafana[(<a href="https://github.com/Gratheon/grafana">grafana</a>)] --"fetch history"--> influx

	telemetry-api --"verify API tokens for REST calls"--> user-cycle[<a href="https://github.com/Gratheon/user-cycle">user-cycle</a>]
	web-app[<a href="https://github.com/Gratheon/web-app">web-app</a>] --"display advanced configureable graphs"--> grafana
	web-app --"query for simplistic metrics\nPOST graphql"-->graphql-router[<a href="https://github.com/Gratheon/graphql-router">graphql-router</a>]--> telemetry-api

```

### Choice of main CPU

| Name             |                                                        | Frequency | Networking     | Chip           | RAM   |
| ---------------- | ------------------------------------------------------ | --------- | -------------- | -------------- | ----- |
| **ESP32**        | popular, cheap, fast, simple, but may not be as stable | 160MHz    | WiFi  <br />BT | 2xXTensa LX6   | 512KB |
| ESP8266          | relatively old                                         | 80MHz     | WiFi           |                | 160KB |
| STM32 → GD32W515 | more stable  <br />cheaper  <br />faster interruptions |           | -              |                | 20KB  |
| Arduino Mega     |                                                        | 16MHz     | -              | **ATmega2560** |       |
| CH32             |                                                        |           |                |                |       |
| RP2040           |                                                        |           |                |                |       |
| nRF52832         |                                                        |           |                |                |       |
| AW-CU300         |                                                        |           |                |                |       |


<iframe width="100%" height="400" src="https://www.youtube.com/embed/boF4cX338k4" title="#345 ESP32 vs STM32: Which one is better (Bluepill)?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Potential sources:

- [https://www.lcsc.com/](https://www.lcsc.com/)
- [https://8020.net/shop](https://8020.net/shop)
- [https://www.v-slot.pl/](https://www.v-slot.pl/)
- [https://www.pcbway.com/](https://www.pcbway.com/)
- [https://www.dfrobot.com/](https://www.dfrobot.com/)