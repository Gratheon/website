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

## Use cases

### Uploading photos & getting detections
- Create a beehive
- Open specific section, add frames
- Open a specific frame, click "upload frame photo"
- Wait for backend to process
- Receive AI-assisted data analytics about his apiary.

### Streaming entrance video
- Setup entrance video camera to stream video
- Check that video stream is visible

App itself is also multilingual

![](../../img/app%20in%20russian.png)



