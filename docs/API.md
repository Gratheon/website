---
title: 🔗 API
sidebar_position: 0
---
Lets setup your devices to interact with Gratheon!

You can also see how exactly we process this data - check out our architecture, services, code, reasons to choose one solution over another. If you are technical enough and find this useful, feel free to improve these guides in github or even add new ones.

## Quickstart
To access our API, you will need to generate API token in [user profile](https://app.gratheon.com/account). Tokens allow us to authenticate you and have ratelimiting.

### Accessing GraphQL API

Here is a CURL exampl 

```
curl --location 'https://graphql.gratheon.com/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```

## GraphQL API

https://graphql.gratheon.com/graphql