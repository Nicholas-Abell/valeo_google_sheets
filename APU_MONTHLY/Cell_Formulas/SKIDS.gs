//Replace {URL} with All Shifts page url
//Replace {DATECELL} with cell containg the date, ie B16

=IFERROR(IMPORTRANGE("{URL}", TO_TEXT(MONTH({DATECELL}) & "." & DAY({DATECELL}) & "." & RIGHT(YEAR({DATECELL}), 2) & "!M7")), "")
