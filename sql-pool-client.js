const mysql = require('mysql');

const { get, query, formatQuery } = require('./lib');


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

SqlPoolClient.prototype.queryAsync = async function (tableName, fields, conditions) {
  const connection = await get(this._poolClient);
  const { formattedQuery, queryValues } = formatQuery(tableName, fields, conditions);

  // TODO format response
  return await query(connection, formattedQuery, queryValues);
}

module.exports = SqlPoolClient;
