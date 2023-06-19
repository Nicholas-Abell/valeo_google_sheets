function PageCheck() {

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const masterSheet = ss.getSheetByName("MASTER2");

    const yesterDayDate = masterSheet.getRange("E48").getValue().toString();

    const todaysDate = masterSheet.getRange("B48").getValue().toString();
    const tomorrowsDate = masterSheet.getRange("C48").getValue().toString();
    const dayAfterTomorrowsDate = masterSheet.getRange("D48").getValue().toString();

    const nextThreeDays =[todaysDate, tomorrowsDate, dayAfterTomorrowsDate];

    function CreateMissingPages (date){
      var page = ss.getSheetByName(date);
      if(!page){
        masterSheet.copyTo(ss).setName(date.toString()).activate();
        Logger.log("Page: " + date + " Created");
      } else{
        Logger.log("Page: " + date + " Already Exists");
      }
      if(page && page.isSheetHidden()){
      page.showSheet();
      Logger.log("Page: " + date + " Revealed");
      }
    }

    function TabColor(date, color){
      var page = ss.getSheetByName(date);
      page && page.setTabColor(color);
    }

      nextThreeDays.forEach((day) => CreateMissingPages(day));

      TabColor(yesterDayDate, null);
      TabColor(todaysDate, '#00ff00');
}
