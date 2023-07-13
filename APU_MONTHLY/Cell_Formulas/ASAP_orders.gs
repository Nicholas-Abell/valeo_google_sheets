//Replace {URL} with LC2 VRO TIMES url
//Replace {DATECELL} with cell containing required date, ie B29
//Replace {PLANT} with:
  // M10 for 1st
  // N10 for 2cnd
  // O10 for 3rd

=IFERROR(IMPORTRANGE("{URL}",TO_TEXT(MONTH({DATECELL}) & "/" & DAY({DATECELL}) & "/" & RIGHT(YEAR({DATECELL}), 2) & "!{PLANT}")), "")
