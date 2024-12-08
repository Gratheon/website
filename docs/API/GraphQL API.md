We use federated GraphQL as main flexible way to query and modify web-app data. You can explore its schema directly at https://graphql.gratheon.com/graphql

### Listing apiaries

Here is a CURL example that simply lists apiaries:

```bash
curl --location 'https://graphql.gratheon.com/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```


This API is most flexible, but it is also changing often and can introduce breaking changes

<iframe src="https://graphql.gratheon.com/graphql" width="100%" height="700"></iframe>

