`status: proof-of-concept, 5% complete`

[Bill of Materials (robot)](https://www.notion.so/Bill-of-Materials-robot-7d3741a8e09d490e88eb285b2bbdc180?pvs=21)

## Why

To solve [**Observability of bee colony**](https://www.notion.so/Observability-of-bee-colony-c7971983f26d4ff19da0ef3390c4871b?pvs=21), [**Physical labor**](https://www.notion.so/Physical-labor-b8861af7945c4cfea61020521ec26a27?pvs=21), [Challenging to become a new beekeeper](https://www.notion.so/Challenging-to-become-a-new-beekeeper-bdf59f6539da4005a394efac02c9c949?pvs=21), [Ugly beehives](https://www.notion.so/Ugly-beehives-49a604ea99fa429691b0e23dccc1f172?pvs=21) problems, we’re building **a single-colony** robotic beehive, capable of automating inspections.

## Vision and Positioning

Single-colony robot costs too much (>2000 EUR) to be cost-efficient in large scales. Because of this, it is unlikely that [Industrial beekeepers](https://www.notion.so/Industrial-beekeepers-cf0c8af087cb456dbb72058b88a42db9?pvs=21) or [Farmers](https://www.notion.so/Farmers-df786b4ba018453da181a8d9da186a79?pvs=21) (that have >20 beehives) will buy it. Instead, we are targeting people that value exterior [Design](https://www.notion.so/Design-0fcc20f16af7447587add9b6a9799f9b?pvs=21) to compliment their brand.

![](../../../honeyflow.png)


[https://www.honeyflow.com/](https://www.honeyflow.com/) as example of tehnological beehive, selling for 700 EUR

![](../../../president.png)


President Alar Karis harvesting honey from the Kadriorg Palace beehives. ([Photo: Office of the President](https://news.err.ee/1609070024/gallery-president-alar-karis-harvesting-honey-in-front-of-kadriorg-palace#lg=1&slide=1)) An example of complimentary brand

### Clients / Target audience

- [👨🏻 Potential new beekeepers](../Target%20clients/👨🏻%20Potential%20new%20beekeepers.md) ← as a shiny and safe beehive that can also teach them beekeeping
- [👩🏼‍🏫 Urban beekeepers](../Target%20clients/👩🏼‍🏫%20Urban%20beekeepers.md) ← as a way to research how bees are behaving and avoid disturbing neighbours
- [👩🏻 Tech scale-up companies](../Target%20clients/👩🏻%20Tech%20scale-up%20companies.md) ← for office roof as a brand building hardware and a in-house honey perk

## How

Main flow is to:
- extract hive frame using [Robotics](https://www.notion.so/Robotics-1d7756ebf56e4a30ba652a128b583f82?pvs=21)
- take photos from both sides
- upload to the [Web-app](https://www.notion.so/Web-app-2937ed264e1d434a8664caa4bc40978e?pvs=21) where it will be processed for health status

## Main code repos

[https://github.com/Gratheon/hardware-robotic-beehive](https://github.com/Gratheon/hardware-robotic-beehive)

## Functional requirements / features

[Untitled](https://www.notion.so/6121104576b8409b9d0eebce36c343ab?pvs=21)

## Non-functional requirements

Extraction should happen without disturbing the bees, exposing them to elements or risking people around.

[Non-functional robotic beehive product requirements](https://www.notion.so/615220168d8c46369d6165f23c571cbb?pvs=21)

## What

### Schematic overview
![](../../../Screenshot%202024-07-01%20at%2018.58.24.png)

[https://excalidraw.com/#json=rQMKVE0rgF-pux2zTyB_S,LQlTn5W0gDaznvv2JDouhA](https://excalidraw.com/#json=rQMKVE0rgF-pux2zTyB_S,LQlTn5W0gDaznvv2JDouhA)

## Prototype

Consists of actuators that can move the frame in/out, GPU, cameras. Very early stage as we’re focusing on [Web-app](https://www.notion.so/Web-app-2937ed264e1d434a8664caa4bc40978e?pvs=21) and [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21) first.
