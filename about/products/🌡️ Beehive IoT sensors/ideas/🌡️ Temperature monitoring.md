Goal of this feature is to predict [❄️ Overwintering collapse](../../../🌨️%20Problems/❄️%20Overwintering%20collapse.md) at winter time and detect [🗃️ Poor hive ventilation](../../../🌨️%20Problems/🗃️%20Poor%20hive%20ventilation.md) at summer time by measuring temperature from inside the hive.

If temperature drops below certain user-configureable threshold, we can alert a beekeeper as this is an anomaly. Beekeeper in that case can try to do some mitigation actions: 
- inspect the hive for ventilation issues
- inspect colony as lacking resources and dying
- move hive inside a garage

# How it works
- IoT sensor periodically sends metrics to gratheon app
- We analyze data patterns
- We send [🔔  Alerts](../../web-app/essential-tier/ideas%20💡/🔔%20%20Alerts.md) in case of anomalies