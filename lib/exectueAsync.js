const executeAsync = (connection, query, values = []) => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results, fields) => {

      // Releasing the connection
      connection.release();
  
      if (err) {
        reject(err);
      }

      resolve({results, fields});
    });
  });
};


module.exports = executeAsync;
