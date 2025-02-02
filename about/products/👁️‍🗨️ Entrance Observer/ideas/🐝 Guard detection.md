Bees on a landing platform typically have some bees that are guarding the entrance from 
- other bees trying to steal resources
- wasps trying to steal honey
- hornets trying to attack the hive internals

Guards detect entering bees by their pheromones. So the idea is that if we can detect and count relatively static bees at the hive entrance, we can plot this metric and reason how much defense a hive has. 

AC:
- send guard count to telemetry-api
- display this count in hive view

TODO: Consider creating an alert if there are no longer any guards. But it may be too false-positive. Needs field testing