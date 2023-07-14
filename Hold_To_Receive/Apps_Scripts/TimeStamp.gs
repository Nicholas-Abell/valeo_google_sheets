function onEdit() {
  var s = SpreadsheetApp.getActiveSheet();
  var r = s.getActiveCell();
  var dateCell = s.getRange('A2');
  var email = Session.getActiveUser().getEmail();

  function timeStamp(x) {
      dateCell.setValue("LAST UPDATED BY: " + `${x[0].toUpperCase() + x.split(".")[1][0].toUpperCase()} @ ` + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString());
  }

  if(r.getRow() != 2){
    timeStamp(email)
  }
}
