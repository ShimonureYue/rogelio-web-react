import config from './config';

const getExpirience = async () => {
  return await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?majorDimension=ROWS&ranges=Trabajos&valueRenderOption=UNFORMATTED_VALUE&key=${config.apiKey}`).then(response => {
    return response.json().then(data => {
      return data.valueRanges[0].values;
    }
  );
 }).catch(
   error => {
     console.log(error);
   }
 );
}

const createItemsFromSheets = (values) => {
  const rows = [];
  for (let i=1 ; i < values.length ; i++) {
    let row = {};
    for (let j=0 ; j<values[i].length ; j++) {
      row[values[0][j]] = values[i][j];
    }
    rows.push(row);
  };
  return rows;
};

export {
  getExpirience,
  createItemsFromSheets
};