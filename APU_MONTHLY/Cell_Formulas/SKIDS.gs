// Substitute {URL} with the web URL of the ALL SHIFTS Receiving Report.
// Replace {DATECELL} with the cell above that contains the desired date, such as B16.

=IFERROR(
  IMPORTRANGE(
    "{URL}",
    TO_TEXT(MONTH({DATECELL}) & "." & DAY({DATECELL}) & "." & RIGHT(YEAR({DATECELL}), 2) & "!M7")
  ),
  ""
)
