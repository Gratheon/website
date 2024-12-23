---
sidebar_position: 1
---

### Setting up Arduino IDE for firmware upload
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


### Uploading firmware
- Checkout our client firmware `git clone git@github.com:Gratheon/beehive-sensors.git`
- Upload code to the device using a button `->`. You should see something like:
  ![](img/Screenshot%202024-11-11%20at%2001.37.37.png)
- Click on the reset button (`FN`) on the chip

### Configuring powered-on ESP32
- Connect to the ESP32 WIFI access point `gratheon`, use password `gratheon`
- Open browser and navigate to wifi access point default gateway - [http://192.168.4.1](http://192.168.4.1)
- Enter your WIFI credentials. We recommend using
- Keep target URL
    - replace `HIVE_ID` with your hive ID. You can take that you can take from URL, ex `https://app.gratheon.com/apiaries/7/hives/54`; here ID is `54`
    - replace `API_TOKEN` with generate token from account settings at [https://app.gratheon.com/account](https://app.gratheon.com/account)
- Click `Save` button. Your ESP32 will restart and connect to your WIFI network and start sending data to the telemetry API service

![](img/352610409-b4ed305f-7ddd-44ff-b200-e0d139734349.jpg)

