`status: idea`

As a more cost-effective solution for large apiaries, we want to reuse [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21) functionality and equip it with ability to move around the apiary to inspect hives on-demand or on-schedule.

### Target audience

- [👨🏻‍🚒 Industrial beekeepers](../clients/👨🏻‍🚒%20Industrial%20beekeepers.md)
- [🧑🏻‍🌾 Farmers](../clients/🧑🏻‍🌾%20Farmers.md)

## Challenges / Requirements

- weather-proof hives
- bee-safe hives
- movement control across hives
- cost-efficient

# Vision

We’ll use an improvement over [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21) but have it **movable between hives**. Design is not set yet and its up for the team to decide on the architecture

![Apiary - beehives traditionally are positioned in a line
Source - https://beeswiki.com/what-is-an-apiary/](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/50d57aab-70a1-4b63-9dcd-86fcacff570f/18e526470a518ddea9ae6e8c8154434f.What-is-an-apiary-1024x675.webp)

Apiary - beehives traditionally are positioned in a line Source - [https://beeswiki.com/what-is-an-apiary/](https://beeswiki.com/what-is-an-apiary/)

## Competition

Compared to competition (ex. [[Beewise](https://beewise.ag/home)]([https://www.notion.so/Beewise-c497a01caf2c4da0ba5e07134ec4eacc?pvs=21](https://www.notion.so/Beewise-c497a01caf2c4da0ba5e07134ec4eacc?pvs=21)) and their Beehome), we **are not doing a revolution** in beekeeping that requires reinventing the beekeeping practices, throwing away existing beekeeping equipment (frames, sections). We are following **evolutionary** and adaptation approach:

- [not risk bee healthy by having multiple colonies together in one congested space](https://www.notion.so/not-risk-bee-healthy-by-having-multiple-colonies-together-in-one-congested-space-76734021ac9f47d494bdb57ad4f843f9?pvs=21)
- allow beekeeper to scale hive amount more flexibly, not limited to 12/24 hives per container
- allow beekeeper to keep using traditional, existing infrastructure (hive boxes and frames) for sustainability and ease of migration

# Ideation

### Movement

||Move on rails|Move on wheels|
|---|---|---|
|Pros|- simple and predictable movement|- hive positions can be random|
|Cons|- limited reach||

- hives need to be in line
- costs more with larger apiaries | - need to stabilize the X-Y angles to have horizontal plane even |

## Construction

||Monolithic|Distributed|
|---|---|---|
|Pros|- simple installation, maintenance, setup||

- good weather protection | - can scale in amount of hives and in their height
- cost effective
- healthy | | Cons | - colonies can infect each other
- higher cost
- loss of existing inventory | - more complex integration, maintenance |