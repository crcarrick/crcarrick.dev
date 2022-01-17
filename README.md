> Dear god I need to automate this

# Setup Fauna Local

1. Install [docker](https://docs.docker.com/desktop/windows/install/)
2. `docker pull fauna/faunadb:latest`
3. `docker run --rm --name faunadb -p 8443:8443 -p 8084:8084 -v /var/lib/faunadb fauna/faunadb`
4. `fauna create-database crcarrick.dev --domain=localhost --port=8443 --scheme=http --secret=secret`
5. `fauna create-key crcarrick.dev admin --domain=localhost --port=8443 --scheme=http --secret=secret`
6. **COPY THE SECRET**
7. `fauna add-endpoint http://localhost:8443 --alias=localhost --key=COPIED_SECRET`
8. Run the same `Setup GQL` commands as for `Production` _(see below)_
9. `ntl env:set FAUNADB_LOCAL_SECRET "COPIED_SECRET"

```shell
fauna upload-graphql-schema fauna/gql/schema.gql --endpoint=localhost --graphqlHost=localhost --graphqlPort=8084
fauna eval --file=fauna/fql/indexes.fql --endpoint=localhost
fauna eval --file=fauna/fql/roles.fql --endpoint=localhost
fauna eval --file=fauna/fql/functions.fql --endpoint=localhost
```

# Setup Fauna Production

Initial Steps

1. Log into Fauna via the UI
2. Create a database (`crcarrick.dev`, US region group)
3. Security -> Create Key -> Call it `Admin`
4. **COPY THE SECRET**

Install `fauna-shell`

```shell
yarn global add fauna-shell
```

Login to the CLI

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

Setup GQL

```shell
fauna upload-graphql-schema fauna/gql/schema.gql
fauna eval --file=fauna/fql/indexes.fql
fauna eval --file=fauna/fql/roles.fql
fauna eval --file=fauna/fql/functions.fql
```

Create & Add a `netlify` Key to `netlify-cli`

1. Security -> Create Key -> Role: `netlify` -> Call it `Netlify`
2. **COPY THE SECRET**

```shell
ntl env:set FAUNADB_SECRET "COPIED_SECRET"
```
