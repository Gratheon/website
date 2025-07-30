---
title: 🔗 API
sidebar_position: 0
---
Lets setup your hive devices to interact with Gratheon!

You can also see how exactly we process this data - check out our architecture, services, code, reasons to choose one solution over another. If you are technical enough and find this useful, feel free to improve these guides in github or even add new ones.

We expose [REST APIs](REST%20APIs.md) for devices and [GraphQL API](GraphQL%20API.md) for software integrations that can handle breaking changes faster.

## Authentication
To access our API, you will need to generate API token in [user profile](https://app.gratheon.com/account). Tokens allow us to authenticate. You must pass this token in `Authorization` http header and have `Bearer ` as prefix, for example:

```bash
curl --location 'https://graphql.gratheon.com/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```

Same thing with REST API:

```bash
curl --location 'https://telemetry.gratheon.com/iot/v1/metrics' \
--header 'Authorization: Bearer API_TOKEN_HERE'
--data '{
"hiveId": 123,
"fields":{ "temperatureCelsius":31.25, "weightKg": 82.34 }
}'
```