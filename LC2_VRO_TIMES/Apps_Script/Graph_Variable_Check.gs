function GraphVariableCheck() {

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const masterSheet = ss.getSheetByName("MASTER2");

    //variables
    const todaysDate = masterSheet.getRange("B48").getValue().toString();
    const tomorrowsDate = masterSheet.getRange("C48").getValue().toString();
    const dayAfterTomorrowsDate = masterSheet.getRange("D48").getValue().toString();
    const days = [todaysDate, tomorrowsDate, dayAfterTomorrowsDate];

  //Makes sure variable in C51 for graph is accurate
    function SetVariables(date){
      var page = ss.getSheetByName(date);
      if(page.getRange("G50").getValue().toString() !== date){
          page.getRange("C51").setValue(date);
          Logger.log(date + " Page Date Set");
        }
        else{
          Logger.log(date + ": variables are good");
        }
    }
    
    days.forEach((day) => SetVariables(day));
}
