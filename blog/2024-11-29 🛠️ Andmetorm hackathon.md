We're participating in the "Data storm" hackathon, which main goal is to use open government data of Estonia related to environment, weather, hydrology, alerts etc.

Our hackathon focus is [🗃️ Storm wind collapsing beehives](../about/🌨️%20Problems/🗃️%20Storm%20wind%20collapsing%20beehives.md) and  [🌪️ Weather alerts](../about/products/📱Web-app/essential-tier/ideas%20💡/🌪️%20Weather%20alerts.md) as a solution
## Team
- [Artjom Kurapov](../about/company/Team/Artjom%20Kurapov.md)
- Alonso Solis
- Adrian Ala
- Roop Runjan Khan

## Event info

- Liis Paemurru - moderator (change management)
- Keskonnaagentuur - main beneficiary providing the API
	- Taimar Ala (direktor)
	- Svetlana Pudova
	- Aivo Lanno
	- Sofia Paes
- Garage 48 - organizers
	- Merit Vislapu
	- Mari Hanikat
	- Laura
- Mentors & expertise (sorry if I got names wrong)
	- Ilja Livenson - IT
	- Jaanus - products & data visualization
	- Romet - FE dev
	- Andreas - design
	- Jana - hydrologia
	- Heleri - env estimation
	- Peeter Kuusik - data contents
	- Erki - data sourcing, transforming
	- Sander Ahi - data analytics
	- Ivar - weather models
	- Martin - data visualization
	- Liis Lille
	- Anastassia Petrova - data analytics
	- Aivo Lanno - UX
	- Kaire Sirel
	- Timo Torp
	- Kaisa Viira
	- Markus Saar - data analytics
	- Jaanus Ant - AI data
	- Rain - garbage data
	- Kadri
	- ...


## Pitching slides

<object data={require('./img/Gratheon%20Pitch%20at%20Andmetorm%20hackathon.pdf').default} type="application/pdf" width="100%" height="400"></object>

![](img/Gratheon%20Pitch%20at%20Andmetorm%20hackathon.pdf)

## Data sources
- https://keskkonnaportaal.ee/et/avaandmed/kliimaandmestik

## Challenges
- [Detailed weather prediction data](https://avaandmed.keskkonnaportaal.ee/dhs/Active/documentList.aspx?ViewId=3b1f9939-7395-4710-968e-ed27eb8316fd)
	-  is too granular. There is no easy way to find out which file should be downloaded, given X/Y coordinates of an apiary
	- is encoded in binary format ([WMO BUFR](https://library.wmo.int/records/item/35625-manual-on-codes-volume-i-2-international-codes) v4) and its not clear which library (in nodejs preferably) can be used to decode this
		- https://github.com/NOAA-EMC/NCEPLIBS-bufr?tab=readme-ov-file uses fortran
		- https://confluence.ecmwf.int/display/BUFR/BUFRDC+Home uses fortran and C
		- https://codes.ecmwf.int/bufr/validator can be used to parse the data
		- https://trollbufr.readthedocs.io/index.html could be a solution (python)
	- some files are huge (1GB), for example NEMO model .zip data archives that include .nc files
	- is short lived

 So in order to have detailed data about closest meteostation, we would need to do a lot of work by crawling the site, downloading all files, parsing them to extract windSpeed for example
 
![](img/Screenshot%202024-11-30%20at%2002.59.08.png)


- (Old) [API forecast](https://www.ilmateenistus.ee/ilma_andmed/xml/forecast.php?lang=eng) for Estonia sort of works, but it has some issues
	- granularity is too broad - it is split into day and night, instead of hourly
	- its forecasts only 4 days
	- its not tied to key regions, not coordinates
	- regions are forecasted only for 1 day ahead, the rest is considered the same for all regions
	- it does not always have wind speed property, even though text description has one

- Climate data time series API shows past data, but not future forecast. 
  https://keskkonnaandmed.envir.ee/f_kliima_tund?aasta=eq.2024&kuu=eq.11&paev=lt.30 seems the best to retrieve past data per meteo station
	- We can still use it to  correlate weather affecting beehives post-factum though. But our focus in hackathon is to prevent beehive collapse due to storms by alarming a beekeeper.


## First day progress (friday)

- Ad-hoc prototype of the feature:
  ![](img/Screenshot%202024-11-30%20at%2003.25.22.png)

- React app prototype by Alonso
  https://bee-app-zeta.vercel.app/
  https://github.com/alonsosolisg/bee-app
  
  ![](img/Screenshot%202024-11-30%20at%2003.23.05.png)
- API wise I registered new weatherEstonia graphql query type
  ![](img/Screenshot%202024-11-30%20at%2003.50.42.png)