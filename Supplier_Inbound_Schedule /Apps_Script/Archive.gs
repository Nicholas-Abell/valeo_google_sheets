function Archive() {

// generates the timestamp and stores in variable formattedDate as year-month-date hour-minute-second
var formattedDate = Utilities.formatDate(new Date(), "GMT-4", "'WK'w");

// gets the name of the original file and appends the word "copy" followed by the timestamp stored in formattedDate
var name = formattedDate + " " + SpreadsheetApp.getActiveSpreadsheet().getName();

// gets the destination folder by their ID. REPLACE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx with your folder's ID that you can get by opening the folder in Google Drive and checking the URL in the browser's address bar
var destination = DriveApp.getFolderById("1ta5PzqhI3CRgsl7HU6hJ3BhaMTAlWO6F");

// gets the current Google Sheet file
var file = DriveApp.getFileById(SpreadsheetApp.getActiveSpreadsheet().getId())

// makes copy of "file" with "name" at the "destination"
file.makeCopy(name, destination);
}
