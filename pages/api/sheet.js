/* eslint-disable no-underscore-dangle */
const { GoogleSpreadsheet } = require('google-spreadsheet');

const googleSpreadSheet = async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  const rows = await sheet.getRows();

  return {
    headers: rows[0]._sheet.headerValues,
    data: rows.map(row => {
      return row._rawData.reduce((accumulator, cell, index) => {
        const register = { ...accumulator };
        register[row._sheet.headerValues[index]] = cell;
        return register;
      }, {});
    })
  };
};

export default async (req, res) => {
  const data = await googleSpreadSheet();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
};
