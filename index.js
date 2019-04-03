const mysql = require('mysql');

const { getConnectionAsync, executeAsync } = require('./lib');


function SqlClient(options) {
  if (!options) {
    throw new Error('Invalid options');
  }

  this._options = options;
}

// Create pool connection
SqlClient.prototype.connect = function() {
  this._client = mysql.createPool(this._options);
};

SqlClient.prototype.queryAsync = async function (query, values) {
  const connection = await getConnectionAsync(this._client);

  return await executeAsync(connection, query, values);
};

module.exports = SqlClient;
