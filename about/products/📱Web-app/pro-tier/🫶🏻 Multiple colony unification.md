## Problem

Bee colonies can get weak. So by september, beekeeper considers joining two colonies together. We need to give this ability in our UX such that colony history remains and user doesn’t need to do extra work.

## Suggested solution

- In beehive view, add button “Merge colonies”
    - On button click - open new modal window with a selection of target beehive
    - Add a note that colony data will get merged AND that the target colony will become the new primary host keeping its inspection history
- On confirm - move all of sections to a new hive
- Update all frame
- Archive the hive with a status “MERGED INTO X hive”
    - Keep inspection history of the old hive