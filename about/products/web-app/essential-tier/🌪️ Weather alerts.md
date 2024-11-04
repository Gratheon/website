## User story

- I created an apiary and set its location (X,Y) - its available in swarm-api service and its DB

![](../../../img/Screenshot%202024-06-20%20at%2014.25.52.png)
    
- Now every day, we should evaluate a risk of storms and hurricanes that can damage hives
- Need to find some existing public source of data for weather info
- Note that we already have [https://github.com/Gratheon/weather](https://github.com/Gratheon/weather) service, so best to improve that
- If there is a risk, generate an weather alert for the user to be aware of
- Main feature under [Alerts](https://www.notion.so/Alerts-8b65dea8fc164a7f91b0a76fa0948189?pvs=21)
    
## Suggested solution

- In weather service, add a periodic job that will make request to swarm-api to extract apiary `{id lng lat}`
- For every apiary, make request to weather service to get weather prediction
- detect if there is a high wind in that area coming in next 24h
- generate new alert - this depends on Alerts feature. Probably needs a request to alerts service