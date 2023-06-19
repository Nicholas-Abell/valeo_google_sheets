const ss = SpreadsheetApp.getActive();
const masterSheet = ss.getSheetByName("MASTER2");

const firstFormat = (sheet) => {
  sheet.getRange('B2:I13').activate();
  sheet.getRange('B2:I13').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
  sheet.getRange('B10:I13').setValue('0');
  console.log("First Shift Formated");
}

const secondFormat = (sheet) => {
  sheet.getRange('B16:I23').activate();
  sheet.getRange('B16:I23').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
  sheet.getRange('B24:I27').setValue('0');
  console.log("Second Shift Formated");
}

const thirdFormat = (sheet) => {
  sheet.getRange('B30:I37').activate();
  sheet.getRange('B30:I37').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
  sheet.getRange('B38:I41').setValue('0');
  console.log("Third Shift Formated");
}

function SetValues(sheet) {
  sheet.getRange('B47').activate();
  sheet.getRange('B47').copyTo(ss.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
  firstFormat(sheet);
  secondFormat(sheet);
  thirdFormat(sheet);
}



