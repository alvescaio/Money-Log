var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1atZO-3yhs30gXRZin-aq8aMBNzRypKPyWOPBbYdv3HM');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
    let result = rows
    let leng = result.length
    for(let i = 0; i < leng; i++){
        console.log(result[i]['_cn6ca'], result[i]['_cokwr'], result[i]['_cpzh4']);
    }
  });

  

  // doc.getInfo(function (err, info){
  //   info.worksheets[0].del();
  // })
});

function removeWorkSheet(sheetDocument, index){
  sheetDocument.worksheets[index].del()
}
