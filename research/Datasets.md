---
title: Datasets
sidebar_position: 2
---
Main source is available via [Google Drive](https://drive.google.com/drive/folders/105PmxDKFUR6NCPLHBkXGdkfcZwWf9ABI?usp=drive_link), mostly due to the size of the data. This includes:

- Manually done photos from inspections of the beehive frames (no annotations, JPG, ~15MP) in years: 2019, 2020, 2021, 2024. Mostly from different hives.
- [👁️‍🗨️ Entrance Observer](/about/products/beehive_camera/) videos 🎥 of the hive entrance
	- [2024, may 19](https://drive.google.com/drive/folders/1bD9uFYu0c2Y4NfKOqTwB-NGl1ZIwEyI1?usp=drive_link). 
		- 640x480 resolution, 10sec chunks
		- ~ 1h of videos in total, 1.1GB
	- [2025, september 04](https://drive.google.com/drive/folders/1BY7RrQdQI-6iaSzx4-CVES0kwVlpzX2u?usp=drive_link). 
		- some chunks have pairs with `_detect.mp4` suffixes, showing yolov8 model detections.
		- 5-25mb per chunk. mp4
	- [2025, september 05](https://drive.google.com/drive/folders/12oV370f8HqrZsuXUU9mLWeT9NAs8HcO2?usp=drive_link) (~mostly continuous 8h of the same hive. Time of day - 11:30  til 20:00)
		- Zoom at landing board ~ 40cm wide
		- ~ 25GB in total
		- 1280x720px. 30 min chunks. 15FPS. 5-25mb per chunk. mp4
		- file names are in UTC timestamps.
		- [related metrics in jsonl format](https://drive.google.com/file/d/18b2aKTxrS1K9YpQciDybXwDlNYuEE4yh/view?usp=drive_link)
		- [related individual bee tracks in jsonl format](https://drive.google.com/file/d/1J6I2KOeUa4dns7OmXidvc6Oqc0VF2goC/view?usp=drive_link)
	- 2025, September 6th. Sunny weather.
	- 2025, September 7th. Sunny weather with clouds and gust after 16:00
		- Zoom in done at 12:00 EEST of landing board area (23cm wide). 
		- 1280x720px. 30 min chunks. 15FPS.  
		- file names are in UTC timestamps.

### Mixed images of the internet and social media

As source, used beekeeping facebook, twitter, telegram groups post lots of photos that you could use to compose own dataset. No copyrights ownership here, use at own risk

- queen images
- queen cups
- varroa miters

## External resources that could be used

- Current bee detection model uses yolo v5 weights from [https://universe.roboflow.com/matt-nudi/honey-bee-detection-model-zgjnb](https://universe.roboflow.com/matt-nudi/honey-bee-detection-model-zgjnb)
- Datasets from the Brno team: [https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-1](https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-1) [https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-2](https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-2) [https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-hs](https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-hs)
- roboflow datasets (with annotations) [https://universe.roboflow.com/search?q=varroa](https://universe.roboflow.com/search?q=varroa)
- inaturalist datasets [https://www.inaturalist.org/observations?place_id=any&taxon_id=54328](https://www.inaturalist.org/observations?place_id=any&taxon_id=54328) [https://www.inaturalist.org/observations?place_id=any&taxon_id=47219](https://www.inaturalist.org/observations?place_id=any&taxon_id=47219)

