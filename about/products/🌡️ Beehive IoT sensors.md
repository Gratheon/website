`status: proof-of-concept, 20% complete`


To compliment [👁️‍🗨️ Entrance Observer](👁️‍🗨️%20Entrance%20Observer.md) and [🧿 Robotic Beehive](🧿%20Robotic%20Beehive.md) , we need a way to send Telemetry API data to the [📱Web-app](📱Web-app.md) from low-power IoT devices.

As there are lots of sensors that send read-only data, it does not make sense to bundle this logic with Robotic Beehive which should focus on controlling (moving) physical frames.

IoT sensors should be sold and thus operate separately from other products that we offer.

![](../img/20240726_000022.webp)

## Main code repos

[https://github.com/gratheon/telemetry-api](https://github.com/gratheon/telemetry-api) - server side

[https://github.com/Gratheon/hardware-beehive-sensors](https://github.com/Gratheon/hardware-beehive-sensors) - sensors repo on client side

![](../img/Screenshot%202024-07-05%20at%2013.32.16.png)