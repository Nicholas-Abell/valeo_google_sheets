function FormatCheck() {
  
    //variables
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const masterSheet = ss.getSheetByName("MASTER2");
    
    var dayBeforeYesterdaysPage = ss.getSheetByName(masterSheet.getRange("F48").getValue().toString());
    var threeDaysAgoPage = ss.getSheetByName(masterSheet.getRange("G48").getValue().toString());
    var fourDaysAgoPage = ss.getSheetByName(masterSheet.getRange("C50").getValue().toString());
    const days = [dayBeforeYesterdaysPage, threeDaysAgoPage, fourDaysAgoPage];

    function Format(page){
      if(page && !page.isSheetHidden()){
        page.setTabColor(null);
        SetValues(page);
        page.hideSheet();
        Logger.log(page.getName() + " : " + "Fomatted and Hidden");
      } else if (page){
        Logger.log(page.getName() + " : Does Not Need Formatted");
      }
    }

    days.forEach((day) => Format(day));
}
