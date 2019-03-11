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


module.exports = getConnectionAsync;
