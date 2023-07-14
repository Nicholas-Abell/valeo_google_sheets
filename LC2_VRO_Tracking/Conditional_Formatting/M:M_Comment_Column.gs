// Conditonal formatting for columns: D, I, J, & k
// the cell will shade out if column M is changed to one of the available drop down options

=M:M="61B ORDER"
=M:M="DUPLICATE"
=M:M="BLANK"
=M:M="ERROR FAIL"
=M:M="HOLD TO RECIEVE"
=M:M="B2 ORDER"
=M:M="CANCELLED"

// Note: conditional formate seems to have its own syntax different than cell functions
