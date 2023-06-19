
function onEdit() {

let s = SpreadsheetApp.getActiveSheet();
let r = s.getActiveCell();
let dateCell = r.offset(0, 4);
let initialCell = r.offset(0, 3);
let email = Session.getActiveUser().getEmail();

/*Did You Add a New Row?
and Now it's putting my timestamp and a wierd place?
change the 2 in (r.getColumn() == 2) to the desired columm number.
and the 4&3 to the desired distance away var dateCell = r.offset(0, 4);
                                         var initialCell = r.offset(0, 3);
*/


//Trucks Recieved Column
if( r.getValue() != '' && r.getColumn() == 2){

  //places a time stamp
  dateCell.setValue(new Date().toLocaleTimeString());

  //Places user initial
  if(email == "nicholas.abell@valeo.com"){
     initialCell.setValue("NA");
   } 
   else if(email == "daniel.roll@valeo.com"){
     initialCell.setValue("DR");
   }
   else if(email == "shelby.wooten@valeo.com"){
     initialCell.setValue("SW");
   }
   else if(email == "bobbie.roark@valeo.com"){
     initialCell.setValue("BR");
   }
   else if(email == "trent.miller@valeo.com"){
     initialCell.setValue("TM");
   }
   else if(email == "johnny.harmon@valeo.com"){
     initialCell.setValue("JH");
   }
 } 
}

   
  
    
