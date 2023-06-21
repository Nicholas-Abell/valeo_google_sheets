=COUNTIFS(
//Count if === Shift #
IMPORTRANGE("LC2_VRO_TRACKING_URL",
TEXT($C$51, "mmmm") & " " & YEAR($C$51) & "!A:A"), "{Shift#}", 

//Count if === Plant #
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm") & " " & YEAR($C$51) & "!F:F"), "{Plant#}", 

//Count if === Date Cell
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm") & " " & YEAR($C$51) & "!B:B"), $C$51, 

//Count if not 61B parts, HTR, etc
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm") & " " & YEAR($C$51) & "!M:M"), "", 

//Count if StartTime is after Shift Start
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm") & " " & YEAR($C$51) & "!C:C"), ">={StartTime}", 

//Count if EndTime is before Shift End
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm") & " " & YEAR($C$51) & "!C:C"), "<{EndTime}", 

//Count if is / is not ASAP
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm") & " " & YEAR($C$51) & "!E:E"), "{ASAP?}")
