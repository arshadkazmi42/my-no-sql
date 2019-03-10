const formatFields = require('./format-field');
const formatConditions = require('.//format-condition');


const formatQuery = (tableName, fields, conditions) => {
  const formattedFields = formatFields(fields);
  const { formattedConditions, queryValues } = formatConditions(conditions);
  
  // Formatting query
  let formattedQuery = `SELECT ${formattedFields} FROM ${tableName}`;

  // Appending conditions in query, if conditions are not empty
  if (conditions && Object.keys(conditions).length > 0) {
    formattedQuery = `${formattedQuery} WHERE ${formattedConditions}`
  }

  return { formattedQuery, queryValues };
};


module.exports = formatQuery;
