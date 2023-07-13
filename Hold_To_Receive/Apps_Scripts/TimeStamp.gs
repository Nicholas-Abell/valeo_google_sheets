// Replace {EMAIL} with literal emails for desired initials
// Will work to improve this at a later date initials should be universal

function onEdit() {
var s = SpreadsheetApp.getActiveSheet();
var r = s.getActiveCell();

//variables
var dateCell = s.getRange('A2');
var email = Session.getActiveUser().getEmail();

function timeStamp(x){
  dateCell.setValue("LAST UPDATED BY: " + `${x} @ ` + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString());
}

//set to only when they edit column "QNTY"
switch(email && r.getRow() != 2){
  case email == '{EMAIL}' :
    timeStamp('CC');
      break;
  case email == '{EMAIL} :
    timeStamp('NA');
      break;
  case email == '{EMAIL}' :
    timeStamp('DW');
      break;
  case email == '{EMAIL}' :
    timeStamp('CD');
      break;
  case email == '{EMAIL}' :
    timeStamp('SW');
      break;
  default :
    timeStamp(email);
      break;
  }
}
