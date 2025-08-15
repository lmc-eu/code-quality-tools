# @alma-oss/eslint-config-graphql

## Install

```bash
npm install @alma-oss/eslint-config-graphql -D
```

## Usage

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    // ... (base eslint config)
    '@alma-oss/eslint-config-graphql',
  ],
};
```

The shareable config can be customized in your [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring).

Additionally don’t forget to have `.graphqlconfig` file:

```json
{
  // ...
  "schemaPath": "schema.json"
  // ...
}
```

## Plugins

This configuration uses the following plugins:

- [`@graphql-eslint/eslint-plugin`](https://the-guild.dev/graphql/eslint/docs/getting-started)
