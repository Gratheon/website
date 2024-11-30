We're participating in the "Data storm" hackathon, which main goal is to use open government data of Estonia related to environment, weather, hydrology, alerts etc.

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

## Challenges
- Weather API is hard to consume
	- [Detailed weather prediction data](https://avaandmed.keskkonnaportaal.ee/dhs/Active/documentList.aspx?ViewId=3b1f9939-7395-4710-968e-ed27eb8316fd) is too grandular. There is no easy way to find out which file should be downloaded, given X/Y coordinates of an apiary
	- Detailed weather prediction data is encoded in unknown binary format (BUFR?) and its not clear which library (in nodejs preferably)