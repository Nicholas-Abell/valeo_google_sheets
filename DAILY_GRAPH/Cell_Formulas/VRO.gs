//pulls total VROs from LC2_VRO_SHEET

//replace {URL} with LC2_VRO_TIMES url address
//replace {DATECELL} with date above cell
/*replace {SHIFTTOTAL} with: 
    !K2 for 1st shift
    !K16 for 2cnd shift
    !K30 for 3rd shift*/

=IFERROR(
IMPORTRANGE(
"{URL}",
TO_TEXT(MONTH({DATECELL})) 
& "/" 
& DAY({DATECELL}) 
& "/" 
& RIGHT({YEAR({DATECELL}), 2)
& "{SHIFTTOTAL}"))
