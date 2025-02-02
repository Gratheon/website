---
sidebar_position: 2
title: 📱Web-app
---

`status: minimum viable product, 60% complete`

Gratheon web-app main job is to provide data analytics about bees that beekeeper owns.
Main use-case is to add most important entities to an app and then manipulate their state as a reflection of reality. 

## Core domain entitites
Such domain entities include:

- Apiary - this is a set of beehives that are located together at specific location. Its easier for beekeepers to manage them this way. Apiary size is limited by the land around it that bees can pollinate.
- Colony and Queen - Bees superorganism are often named a "bee colony". A queen is the only type of bee that lays eggs and that other worker bees are taking care of.
	- Race - western honey bees (apis mellifera) have local variations that result in their appearance and behaviour that beekeepers value and want to know about.
	- Year - queen age tells beekeepers how efficient the colony can be. Max age is 5 years, but as queen gets older, colony strength typically reduces
- Hive - A beehive as a constructive element, composing of sections and modules.
	- Hive sections and entrances - a vertical beehive consists of hollow wooden sections that can be of different size and can house beeframes.
	- Frames - a wooden frame with wax foundation inside of it that bees live on
- Inspections - These are (regular) interventions of the beekeeper to understand what is the state of the beehive. We think if it as a snapshot of the entire beehive in time.
- Treatments - Beekeepers add chemicals to the beehive to combat varroa mites. Keeping a diary-like track of these inspections helps to be consistent.

![](../../img/web-app.png)

## Main app use cases
Use-cases is a group of features that when combined serve a great value for the customer

### Uploading photos to get colony overview stats
- Create a beehive
- Open specific section, add frames
- Open a specific frame, click "upload frame photo" with bees and comb cells on it
- Wait for backend to process
- Receive AI-assisted statistics about bee counts and cell distribution
- Compare different hives to see which ones are more powerful with real data behind it

### Track colony development over time
- Follow steps for adding frame photos of the beehive after an inspection
- Click on "Create inspection button" to create a snapshot of the hive in time
- 

### Sending weight telemetry from IoT sensors
- Generate API token in Account settings
- Power on IoT sensors device, follow Docs to connect it to WiFi and send data
- Open target beehive, open Metrics tab and see graphs of weight/temperature
- Open Analytics tab to see data more time-bound and correlate it with other data like weather

### Streaming entrance video
- Setup entrance video camera to stream video
- Check that video stream is visible




