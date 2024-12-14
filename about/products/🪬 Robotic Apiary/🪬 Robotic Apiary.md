---
sidebar_position: 6
---

`status: ideation`

As a more cost-effective solution for large apiaries, we want to reuse [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21) functionality and equip it with ability to move around the apiary to inspect hives on-demand or on-schedule.

### Target audience

- [👨🏻‍🚒 Industrial beekeepers](../clients/👨🏻‍🚒%20Industrial%20beekeepers.md)
- [🧑🏻‍🌾 Farmers](../clients/🧑🏻‍🌾%20Farmers.md)

## Challenges / Requirements

- inspect multiple hives
- cost-effective
- weather-proof hives
- bee-safe hives
- movement control across hives

# Vision

We’ll use an improvement over [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21) but have it **movable between hives**. Design is not set yet and its up for the team to decide on the architecture

![](../../img/18e526470a518ddea9ae6e8c8154434f.What-is-an-apiary-1024x675.webp)

Apiary - beehives traditionally are positioned in a line Source - [https://beeswiki.com/what-is-an-apiary/](https://beeswiki.com/what-is-an-apiary/)

# Ideation

### Movement

|      | Move on rails                                                                          | Move on wheels                                                   |
| ---- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Pros | - simple and predictable movement                                                      | - hive positions can be random                                   |
| Cons | - limited reach  <br />- hives need to be in line  <br />- costs more with larger apiaries | - need to stabilize the X-Y angles to have horizontal plane even |

## Construction

|      | Monolithic                                                                                | Distributed                                                                                 |
| ---- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Pros | - simple installation, maintenance, setup  <br />- good weather protection                | - can scale in amount of hives and in their height  <br />- cost effective  <br />- healthy |
| Cons | - colonies can infect each other  <br />- higher cost  <br />- loss of existing inventory | - more complex integration, maintenance                                                     |

## Moveable with a car
![](img/468428721_1783934302344168_5103667842374827413_n.jpg)

![](img/468456177_1783934262344172_6683024661505151342_n.jpg)source - https://www.facebook.com/groups/1565659347190712/posts/2000328063723836