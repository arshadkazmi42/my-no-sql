const SqlPoolClient = require('../index');

const test = async () => {
  const client = new SqlPoolClient({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'my-no-sql',
    acquireTimeout: 10000
  })
  
  client.connect()
  
  const res = await client.queryAsync('SELECT * FROM coupons where id = ?', [1]);
  if (Object.keys(res.results[0]).length > 0) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }

  process.exit();
}

test();