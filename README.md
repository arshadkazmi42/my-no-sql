# my-no-sql

Easy to use model based MySQL client

> Give us a :star: if you like our work :heart:

## Install

```
$ npm install my-no-sql
```

## Usage

```javascript
const SqlClient = require('my-no-sql');

const DB_OPTIONS = {
  host: 'hostname',
  database: 'database_name',
  user: 'database_user',
  password: 'database_password',
  acquireTimeout: 'aquired_timeout' // optional
}

const Client = new SqlClient(DB_OPTIONS);
const QUERY = `SELECT * FROM TABLE_NAME WHERE ID = ?`;
const QUERY_VALUES = [1];

Client.queryAsync(QUERY, QUERY_VALUES);
```
