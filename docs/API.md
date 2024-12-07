---
title: 🔗 API
sidebar_position: 0
---
Lets setup your devices to interact with Gratheon!

You can also see how exactly we process this data - check out our architecture, services, code, reasons to choose one solution over another. If you are technical enough and find this useful, feel free to improve these guides in github or even add new ones.

## Quickstart
To access our API, you will need to generate API token in [user profile](https://app.gratheon.com/account). Tokens allow us to authenticate you and have ratelimiting.

## GraphQL API
We use federated GraphQL as main flexible way to query and modify web-app data. You can explore its schema directly at https://graphql.gratheon.com/graphql (but make sure you are logged in)

This API is most flexible, but it is also changing often and can introduce breaking changes

<iframe src="https://graphql.gratheon.com/graphql" width=100% height=700></iframe>

### Listing apiaries with API token

Here is a CURL example that simply lists apiaries:

```bash
curl --location 'https://graphql.gratheon.com/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```


