const getPoolConnectionAsync = (pool) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      }

      resolve(connection);
    });
  });
};

const poolQueryAsync = (connection, query, values = []) => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results, fields) => {
      connection.release();
  
      if (err) {
        reject(err);
      }

      resolve({results, fields});
    });
  });
};


module.exports = {
  getPoolConnectionAsync,
  poolQueryAsync
};