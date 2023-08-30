// Please substitute {URL} with the LC2 VRO TIMES URL.
// Also, replace {DATECELL} with the cell containing the necessary date (e.g., B29).
// Finally, use the appropriate code for {PLANT}:
  // Use M10 for the 1st option.
  // Opt for N10 for the 2nd option.
  // Select O10 for the 3rd option.

=IFERROR(
  IMPORTRANGE(
    "{URL}",
    TO_TEXT(MONTH({DATECELL}) & "/" & DAY({DATECELL}) & "/" & RIGHT(YEAR({DATECELL}), 2) & "!{PLANT}")
  ),
  ""
)
