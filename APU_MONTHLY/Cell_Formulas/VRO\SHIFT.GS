// Replace {URL} wit LC2 VRO Times page url
// Replace {DATECELL} with cell above that contains the date, ie B7
//Replace {SHIFTCELL} with:
  //  K6 for 1st shift
  //  K20 for 2cnd shift
  //  K34 for 3rd shift

=IFERROR(IMPORTRANGE("{url}",TO_TEXT(MONTH({DATECELL}) & "/" & DAY({DATECELL}) & "/" & RIGHT(YEAR({DATECELL}), 2) & "!{SHIFTCELL}")), "")
