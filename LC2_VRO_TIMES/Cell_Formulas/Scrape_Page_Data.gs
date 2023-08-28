=COUNTIFS(
//Count if === Shift #
IMPORTRANGE("LC2_VRO_TRACKING_URL",
TEXT($C$51, "mmmm yyyy") & "!A:A"), "{Shift#}", 

//Count if === Plant #
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm yyyy") & "!F:F"), "{Plant#}", 

//Count if === Date Cell
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm yyyy") & "!B:B"), $C$51, 

//Count if not 61B parts, HTR, etc
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm yyyy") & "!M:M"), "", 

//Count if StartTime is after Shift Start
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm yyyy") & "!C:C"), ">={StartTime}", 

//Count if EndTime is before Shift End
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm yyyy") & "!C:C"), "<{EndTime}", 

//Count if is / is not ASAP
IMPORTRANGE("LC2_VRO_TRACKING_URL", 
TEXT($C$51, "mmmm yyyy") & "!E:E"), "{ASAP?}")


*EXAMPLE*

=COUNTIFS(
  IMPORTRANGE("https://docs.google.com/spreadsheets/d/1tT66zxNuOKNiD6nbAVF08GfJhsRsC-RARgPKcL8iTGU/edit#gid=1520607776",
              TEXT($C$51, "mmmm yyyy") & "!A:A"), "2", //shift
  IMPORTRANGE("https://docs.google.com/spreadsheets/d/1tT66zxNuOKNiD6nbAVF08GfJhsRsC-RARgPKcL8iTGU/edit#gid=1520607776",
              TEXT($C$51, "mmmm yyyy") & "!F:F"), "1", //plant
  IMPORTRANGE("https://docs.google.com/spreadsheets/d/1tT66zxNuOKNiD6nbAVF08GfJhsRsC-RARgPKcL8iTGU/edit#gid=1520607776",
              TEXT($C$51, "mmmm yyyy") & "!B:B"), $C$51, //dateCell
  IMPORTRANGE("https://docs.google.com/spreadsheets/d/1tT66zxNuOKNiD6nbAVF08GfJhsRsC-RARgPKcL8iTGU/edit#gid=1520607776",
              TEXT($C$51, "mmmm yyyy") & "!M:M"), "", //not 61B, etc
  IMPORTRANGE("https://docs.google.com/spreadsheets/d/1tT66zxNuOKNiD6nbAVF08GfJhsRsC-RARgPKcL8iTGU/edit#gid=1520607776",
              TEXT($C$51, "mmmm yyyy") & "!C:C"), ">=1:00 PM", //start time
  IMPORTRANGE("https://docs.google.com/spreadsheets/d/1tT66zxNuOKNiD6nbAVF08GfJhsRsC-RARgPKcL8iTGU/edit#gid=1520607776",
              TEXT($C$51, "mmmm yyyy") & "!C:C"), "<3:00 PM", //end time
  IMPORTRANGE("https://docs.google.com/spreadsheets/d/1tT66zxNuOKNiD6nbAVF08GfJhsRsC-RARgPKcL8iTGU/edit#gid=1520607776",
              TEXT($C$51, "mmmm yyyy") & "!E:E"), "N" //asap y or no
)
