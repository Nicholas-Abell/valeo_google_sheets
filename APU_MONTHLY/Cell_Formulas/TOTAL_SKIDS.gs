// Replace {URL} with ALL SHIFTS Recieving Report Url
// Replace {DATECELL} with cell containing the date ie B16


=IFERROR(IMPORTRANGE("{URL}", TO_TEXT(MONTH({DATECELL}) & "." & DAY({DATECELL}) & "." & RIGHT(YEAR({DATECELL}), 2) & "!M7")), "")
