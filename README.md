> Dear god I need to automate this

# Setup Fauna PROD

### Initial Steps

1. Log into Fauna via the UI
2. Create a database (`crcarrick.dev`, US region group)
3. Security -> Create Key -> Call it `Admin`
4. **COPY THE SECRET**

### Install `fauna-shell`

```shell
yarn global add fauna-shell
```

### Login to the CLI

```shell
fauna cloud-login

? The endpoint alias prefix (to combine with a region): (cloud) crcarrick.dev
? How do you prefer to authenticate? (Use arrow keys)
  Email and Password
❯ Secret
? Secret (from a key or token): COPIED_SECRET
? Select a region
  Classic
  Europe (EU)
❯ United States (US)
```

### Setup GQL

```shell
fauna upload-graphql-schema fauna/gql/schema.gql
fauna eval --file=fauna/fql/indexes.fql
fauna eval --file=fauna/fql/roles.fql
fauna eval --file=fauna/fql/functions.fql
```

### Setup Netlify

1. Security -> Create Key -> Role: `netlify` -> Call it `Netlify`
2. **COPY THE SECRET**

```shell
ntl env:set FAUNADB_SECRET "COPIED_SECRET"
```

# Setup Fauna DEV

### Initial Steps

1. Follow `PROD` "Initial Steps", instead naming the database `crcarrick.dev__DEV`

### Add the DEV endpoint to `fauna-shell`

```shell
fauna add-endpoint https://db.us.fauna.com --alias=crcarrick.dev__DEV-us --key=COPIED_SECRET
echo "graphqlHost=graphql.us.fauna.com" >> ~/.fauna-shell
```

### Setup GQL

Follow the `PROD` "Setup GQL" steps, appending `--endpoint=crcarrick\.dev__DEV-us` to the end of each command

### Setup Netlify

Follow the `PROD` "Setup Netlify" steps, instead naming the env variable `FAUNADB_DEV_SECRET`
