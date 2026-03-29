# @alma-oss/eslint-config-graphql

> Alma’s ESLint config for projects using GraphQL.

Validates GraphQL schema definitions and embedded GraphQL in JavaScript/TypeScript files.

## Install

```bash
npm install @alma-oss/eslint-config-graphql -D
```

## Usage

Create a _eslint.config.js_ file with the following contents:

```js
// eslint.config.js

import graphqlConfig from ‘@alma-oss/eslint-config-graphql’;

export default [
  // ... your other configs
  ...graphqlConfig,
];
```

## Processing

### Embedded GraphQL

The config includes a processor that validates GraphQL code embedded in JavaScript/TypeScript template literals. Tag your GraphQL with `gql` or `graphql` to enable processing:

```js
// ✅ Valid - will be linted
const query = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;

// ✅ Valid - graphql tag also works
const mutation = graphql`
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      id
    }
  }
`;
```

### `.graphql` Files

The config also validates standalone `.graphql` schema and query files.

## Plugins

This configuration uses the following plugins:

- [`@graphql-eslint/eslint-plugin`](https://the-guild.dev/graphql/eslint/docs/getting-started) — GraphQL validation and code style rules

## Rules

For available rules see [ESLint plugin GraphQL](https://the-guild.dev/graphql/eslint/rules).

## 📝 License

Licensed under the [MIT][license].

[license]: https://github.com/lmc-eu/code-quality-tools/blob/main/LICENSE
