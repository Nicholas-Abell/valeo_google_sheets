// Resets the page tp default color scheme on open
// Not currently in use

function onOpen(e){
  color();
};

function color() {
    var ss = SpreadsheetApp.getActive();
    const holdToRecieveSheet = ss.getSheetByName('Hold to receive');
    holdToRecieveSheet.getRange('A4:G150').activate();
    holdToRecieveSheet.getActiveRangeList().setBackground(null);
  }
