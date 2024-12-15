---
title: 🌡️ Beehive IoT sensors
sidebar_position: 4
hide_table_of_contents: true
---
<iframe width="100%" height="400" src="https://www.youtube.com/embed/Ags3rplPkQE" title="Getting started with iot sensors development" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Architecture

### Services
- [https://github.com/Gratheon/hardware-beehive-sensors](https://github.com/Gratheon/hardware-beehive-sensors) - sensors repo on client side
- [https://github.com/gratheon/telemetry-api](https://github.com/gratheon/telemetry-api) - server side

```mermaid
flowchart LR
	beehive-sensors[<a href="https://github.com/Gratheon/beehive-sensors">beehive-sensors</a>] -."send metrics every 1 min".-> telemetry-api

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
- ESP32 chips come in different flavours. If you got same component as described in the bill of materials - [ESP32](components/ESP32.md), then connect it over USB to your machine
- Choose `ESP32-WROOM-DA Module` from device list
![](img/Screenshot%202024-11-11%20at%2001.33.06.png)

- Make sure to change Arduino IDE upload speed to 115200 baud under Tools so that your device can receive data when you upload it

![](img/Screenshot%202024-07-22%20at%2003.42.43.png)

- Install [DallasTemperature@3.9.0](https://github.com/milesburton/Arduino-Temperature-Control-Library) library in Arduino IDE (DallasTemperature@3.9.0
![](img/Screenshot%202024-11-10%20at%2015.19.14.png)
- Install [Adafruit HX711 library](https://github.com/adafruit/Adafruit_HX711) in Arduino IDE
![](img/Screenshot%202024-11-10%20at%2015.19.48.png)
- Upload code to the device using a button `->`. You should see something like:
  ![](img/Screenshot%202024-11-11%20at%2001.37.37.png)
- Click on the reset button (`FN`) on the chip
- Connect to the ESP32 WIFI access point `gratheon`, use password `gratheon`
- Open browser and navigate to wifi access point default gateway - [http://192.168.4.1](http://192.168.4.1)
- Enter your WIFI credentials
- Set target URL `https://telemetry.gratheon.com/metric/HIVE_ID?api_token=API_TOKEN`
    - replace `HIVE_ID` with your hive ID. You can take that you can take from URL, ex `https://app.gratheon.com/apiaries/7/hives/54`; here ID is `54`
    - replace `API_TOKEN` with generate token from account settings at [https://app.gratheon.com/account](https://app.gratheon.com/account)
- Click `Save` button. Your ESP32 will restart and connect to your WIFI network and start sending data to the telemetry API service

![](img/352610409-b4ed305f-7ddd-44ff-b200-e0d139734349.jpg)



<iframe width="100%" height="400" src="https://www.youtube.com/embed/xPlN_Tk3VLQ" title="Introduction to ESP32 - Getting Started" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>