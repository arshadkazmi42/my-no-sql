const mysql = require('mysql');

const { getPoolConnectionAsync, poolQueryAsync } = require('./lib');


function SqlPoolClient(options) {
  if (!options) {
    throw new Error('Invalid options');
  }

  this._options = options;
  this._client = null;
}

SqlPoolClient.prototype.createPool = function() {
  this._poolClient = mysql.createPool(this._options);
}

SqlPoolClient.prototype.queryAsync = async function (query, values) {
  const connection = await getPoolConnectionAsync(this._poolClient);

  // TODO format response
  return await poolQueryAsync(connection, query, values);
}

module.exports = SqlPoolClient;
