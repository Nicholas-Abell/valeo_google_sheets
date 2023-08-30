// Please replace {URL} with the web URL of the ALL SHIFTS Receiving Report.
// Also, replace {DATECELL} with the cell above containing the desired date, for instance, B1.

=IFERROR(
  IMPORTRANGE(
    "{URL}",
    TO_TEXT(MONTH({DATECELL}) & "." & DAY({DATECELL}) & "." & RIGHT(YEAR({DATECELL}), 2) & "!M5")
  ),
  ""
)
