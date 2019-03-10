const formatFields = (fields) => {
  if (!fields || fields[0] === '*') {
    return '*';
  }

  let formattedFields = '';
  for (let index in fields) {
    formattedFields = `${formattedFields}${fields[index]}`
    if (fields.indexOf(fields[index]) < fields.length - 1) {
      formattedFields = `${formattedFields}, `
    }
  }

  return formattedFields;
};


module.exports = formatFields;
