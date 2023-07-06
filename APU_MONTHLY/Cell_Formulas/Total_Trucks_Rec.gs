//Replace {URL} with ALL SHIFTS Recieving Report web url
//Replase {DATECELL} with the cell above containg the desired date, ie B1

=IFERROR( IMPORTRANGE("{URL}", TO_TEXT(MONTH({DATECELL}) & "." & DAY({DATECELL}) & "." & RIGHT(YEAR({DATECELL}), 2) & "!M5")), "")
