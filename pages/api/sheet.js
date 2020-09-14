const { GoogleSpreadsheet } = require('google-spreadsheet');

const googleSpreadSheet = async () => {
  console.log('GOOGLE_SPREADSHEET_ID', process.env.GOOGLE_SPREADSHEET_ID);
  console.log(
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  );
  console.log('GOOGLE_PRIVATE_KEY', process.env.GOOGLE_PRIVATE_KEY);

  // const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

  // await doc.useServiceAccountAuth({
  //   client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  //   private_key: process.env.GOOGLE_PRIVATE_KEY
  // });

  // await doc.loadInfo();

  // const sheet = doc.sheetsByIndex[0];

  // const rows = await sheet.getRows();

  // return {
  //   headers: rows[0]._sheet.headerValues,
  //   data: rows.map(row => row._rawData)
  // };

  return {
    headers: ['Test'],
    data: []
  };
};

export default async (req, res) => {
  const data = await googleSpreadSheet();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
};
