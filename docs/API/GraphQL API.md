---
sidebar_position: 1
hide_table_of_contents: true
title: ⚛️ GraphQL API
---
We use federated GraphQL as main flexible way to query and modify web-app data. You can explore its schema directly at https://graphql.gratheon.com/graphql

This API is most flexible, but it is also changing often and can introduce breaking changes

## Authentication

Standard authentication uses a JWT passed via the `token` HTTP header or a `gratheon_session` cookie. API tokens can be generated in the user settings and used via the `Authorization: Bearer <token>` header.

### Share Token Authentication (Read-Only Access)

For publicly shared resources like inspection views, a special **Share Token** is used. This token provides limited, read-only access based on predefined scopes.

-   **Header:** When making requests using a share token, include it in the `X-Share-Token` HTTP header:
    ```
    X-Share-Token: <your_share_token>
    ```
-   **Scopes:** Each share token has embedded scopes defining exactly which queries are allowed and for which specific resource IDs. For example, a token for sharing inspection `123` of hive `456` might have scopes like:
    ```json
    {
      "version": 1,
      "allowedQueries": [
        {
          "queryName": "inspection",
          "requiredArgs": { "id": "123" }
        },
        {
          "queryName": "hive",
          "requiredArgs": { "id": "456" }
        }
        // Potentially other related read-only queries like apiary, frames, etc.
      ]
    }
    ```
-   **Validation & Enforcement:** The `graphql-router` validates the `X-Share-Token` by calling the `validateShareToken` query on the `user-cycle` service. If the token is valid, the router **enforces** the embedded scopes by parsing the incoming GraphQL request. It checks if the requested operation (query) and its arguments match an entry in the token's `allowedQueries`. Requests attempting operations or arguments outside the defined scopes, or any mutations, will be denied directly by the router with a `403 Forbidden` error before reaching downstream services.

<iframe src="https://graphql.gratheon.com/graphql" width="100%" height="700"></iframe>
