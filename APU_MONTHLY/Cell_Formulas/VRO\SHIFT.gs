// Replace {URL} with the LC2 VRO Times page URL.
// Replace {DATECELL} with the cell above containing the date, for example, B7.
// For {SHIFTCELL}, use:
  // K6 for the 1st shift.
  // K20 for the 2nd shift.
  // K34 for the 3rd shift.

=IFERROR(
  IMPORTRANGE(
    "{URL}",
    TO_TEXT(MONTH({DATECELL}) & "/" & DAY({DATECELL}) & "/" & RIGHT(YEAR({DATECELL}), 2) & "!{SHIFTCELL}")
  ),
  ""
)
