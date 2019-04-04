# my-no-sql

Light weight easy to use MySQL client

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

(async () => {
  const queryResult = await Client.queryAsync(QUERY, QUERY_VALUES);
})();
```

## Contributing

We are constantly working on improving `my-no-sql` and we need all the help we can get.

You can contribute to this project by giving [suggestions](https://github.com/arshadkazmi42/my-no-sql/issues/new), fixing [open issues](https://github.com/arshadkazmi42/my-no-sql/issues) or by implementing a new feature. Read our contibution guide [here](CONTRIBUTING.md)

## Contributors

Thank you to all the contributors who have helped us in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>