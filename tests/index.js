const SqlPoolClient = require('../sql-pool-client');

const test = async () => {
  const client = new SqlPoolClient({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'the-company',
    acquireTimeout: 10000
  })
  
  client.createPool()
  
  // tableName, fields (* for all), whereCondition
  const res = await client.queryAsync('coupons', ['id, code'], {'id': 1});
  console.log(res)
}

test();