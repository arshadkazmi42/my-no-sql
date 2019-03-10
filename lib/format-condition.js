const formatConditions = (conditions) => {
  if (!conditions) {
    return '';
  }

  let formattedConditions = '';
  let queryValues = [];

  const conditionKeys = Object.keys(conditions);
  for (index in conditionKeys) {
    formattedConditions = `${formattedConditions}${conditionKeys[index]} = ?`;
    queryValues.push(conditions[conditionKeys[index]]);  
    if (conditionKeys.indexOf(conditionKeys[index]) < conditionKeys.length - 1) {
      formatConditions + `${formatConditions} and `;
    }
  }

  return { formattedConditions, queryValues };
};


module.exports = formatConditions;
