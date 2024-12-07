---
title: 🔗 API
sidebar_position: 1
---
## API tokens
Generate API token in [user profile](https://app.gratheon.com/account)

```
curl --location 'http://0.0.0.0:6100/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```