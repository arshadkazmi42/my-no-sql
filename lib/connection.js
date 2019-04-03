const getConnectionAsync = (pool) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      }

      resolve(connection);
    });
  });
};

const executeAsync = (connection, query, values = []) => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      connection.release();
  
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};


module.exports = {
  getConnectionAsync,
  executeAsync
};