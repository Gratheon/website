---
title: 🧿 Robotic Beehive
sidebar_position: 5
---
`status: proof-of-concept, 5% complete`

[Bill of Materials (robot)](https://www.notion.so/Bill-of-Materials-robot-7d3741a8e09d490e88eb285b2bbdc180?pvs=21)

## Why

Goal of this project is to solve these beekeeping problems:
- [👁️ Observability of bee colony](../../🌨️%20Problems/👁️%20Observability%20of%20bee%20colony.md)
- [💪🏻 Physical labor](../../🌨️%20Problems/💪🏻%20Physical%20labor.md)
- [🎒 Challenging to become a new beekeeper](../../🌨️%20Problems/🎒%20Challenging%20to%20become%20a%20new%20beekeeper.md)
- [🗃️ Ugly beehives](../../🌨️%20Problems/🗃️%20Ugly%20beehives.md)

## Solution
We are developing **a single-colony** robotic beehive, capable of automating inspections.


### Positioning and Target audience

Single-colony robot will cost a lot (>2000 EUR) and thus it is not cost-efficient for large scales. Because of this, it is unlikely that [👨🏻‍🚒 Industrial beekeepers](../clients/👨🏻‍🚒%20Industrial%20beekeepers.md) or [🧑🏻‍🌾 Farmers](../clients/🧑🏻‍🌾%20Farmers.md) (that have >20 beehives) will buy it. Instead, we position it as a luxury item that compliments customer brand.

- [👨🏻 Potential new beekeepers](../clients/👨🏻%20Potential%20new%20beekeepers.md) ← as a shiny and safe beehive that can also teach them beekeeping
- [👩🏼‍🏫 Urban beekeepers](../clients/👩🏼‍🏫%20Urban%20beekeepers.md) ← as a way to research how bees are behaving and avoid disturbing neighbours
- [👩🏻 Tech scale-up companies](../clients/👩🏻%20Tech%20scale-up%20companies.md) ← for office roof as a brand building hardware and a in-house honey perk

![](../../img/president.png)

President Alar Karis harvesting honey from the Kadriorg Palace beehives. ([Photo: Office of the President](https://news.err.ee/1609070024/gallery-president-alar-karis-harvesting-honey-in-front-of-kadriorg-palace#lg=1&slide=1)) An example of potential complimentary brand

## How

Main use case is to:
- extract hive frame using [Robotics](https://www.notion.so/Robotics-1d7756ebf56e4a30ba652a128b583f82?pvs=21)
- take photos from both sides
- upload to the [Web-app](https://www.notion.so/Web-app-2937ed264e1d434a8664caa4bc40978e?pvs=21) where it will be processed for health status

## Functional requirements / features
<!-- QueryToSerialize: table WITHOUT ID "[" + default(title, file.name) + "]" + default( "("+  replace(replace(file.path, "gratheon.com/about/products/robotic_beehive/", ""), " ", "%20") + ")", "") as title FROM "gratheon.com/about/products/robotic_beehive/ideas" WHERE file.name != "index" -->
<!-- SerializedQuery: table WITHOUT ID "[" + default(title, file.name) + "]" + default( "("+  replace(replace(file.path, "gratheon.com/about/products/robotic_beehive/", ""), " ", "%20") + ")", "") as title FROM "gratheon.com/about/products/robotic_beehive/ideas" WHERE file.name != "index" -->

| title |
| ----- |
<!-- SerializedQuery END -->

## Non-functional requirements

Extraction should happen without disturbing the bees, exposing them to elements or risking people around.

- able to adjust to frame size and hive section size of customer’s choice (Langstroth, Farrar, National etc)
- should not harm human operator - @Regulations and Compliance (ex. breaking hands)
- not kill 🐝 bees [squashing with moving mechanisms, cause hypothermia, open to stealing or attacks via cracks]
- be able to extract frame if bees glued it with wax
- not 🔥 ignite from overheating, sun, electrical wiring etc. Beewax is highly flammable
- move frame that is full of honey (4kg)
- be repairable (modular, hot-swappable)
- be offline-first. Provide data to beekeeper without internet or cloud account
- provide manual on-site control over frame movement
- fallback to safe mode on power loss

## Prototype

Consists of actuators that can move the frame in/out, GPU, cameras. Very early stage as we’re focusing on [Web-app](https://www.notion.so/Web-app-2937ed264e1d434a8664caa4bc40978e?pvs=21) and [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21) first.
