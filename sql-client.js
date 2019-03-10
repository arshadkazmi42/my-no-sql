const mysql = require('mysql');

const { get, query, formatQuery } = require('./lib');


function SqlClient(options) {
  if (!options) {
    throw new Error('Invalid options');
  }

  this._options = options;
  this._client = null;
}

SqlClient.prototype.createConnection = () => {
  this._client = mysql.createConnection(this._options);
}

// TODO Implement direct conneciton query handlers

module.exports = SqlClient;
