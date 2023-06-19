function onOpen(e){
   //Activates every time the page is opened or refreshed.
 
  PageCheck(); //Creates new pages as needed, sets tab color, unhides needed sheets
  FormatCheck(); //Formats codes needed for tracking "VRO Tracking Sheet", hides old sheets
  GraphVariableCheck(); //Makes Sure the variable needed for codes is accurate
}
