Similar to [Multiple colony unification](https://www.notion.so/Multiple-colony-unification-7d4eb56618964af9ace34d39bb7c9d28?pvs=21), beekeepers at the summer may have very big colonies that they want to split to prevent swarming.

<iframe width="433" height="244" src="https://www.youtube.com/embed/E-W3XCv4OaA" title="How to Split a Beehive into 2 Nucs and Parent Colony #Beekeeping Basics  - The Norfolk Honey Co" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Our web-app should allow this

## Suggested solution

- In hive view add `Split colony` button
- On click
    - Show a new info block on top saying that you are now in frame selection mode
    - On frame click, they should become highlighted
    - On frame click, info block should show `will move N frames` into new hive
    - Block should now also show `Complete colony split` and `Cancel split` buttons
    - user should still be able to navigate into frame side views to explore what is in them
- On `Complete colony split` button click
    - create new hive with a single section
    - update frames to be in a new hive
    - add new success message `New hive XXX created` with a link to it