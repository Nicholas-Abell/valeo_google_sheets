# Automated Google Sheet Documentation

This Google Sheet is designed to be mostly self-sufficient, requiring daily opening to refresh data and perform necessary operations. The sheets are automatically created, formatted, and hidden when the page is opened.

## Important Notes

- **Character Limit:** Google Sheets have a 5 million character limit. If this limit is reached, the page creation process will stop and throw an error. In such cases, take the following steps:
  
  1. **APU Graphs:** Ensure that APU graphs are no longer directly pulling data from these sheets. You can achieve this by performing the following steps:
      - Right-click on a cell containing data from these sheets.
      - Choose "Copy" from the context menu.
      - Right-click again on the same cell or a different cell.
      - Choose "Paste special" and then "Paste values". This will remove the underlying code while retaining the cell value.

  2. **Delete Old Sheets:** Delete old sheets that are no longer required. This will help free up space and potentially reduce the character count.

## Usage

1. **Open the Sheet Daily:** To ensure data is up to date and processes run smoothly, open the Google Sheet daily.

2. **Automated Sheet Creation:** The sheets are automatically generated, formatted, and hidden when the page is opened. This reduces manual intervention and ensures consistency.

## Limitations

- **5 Million Character Limit:** Keep in mind that Google Sheets have a maximum character limit of 5 million. Be mindful of this limit, and take action if you approach it to avoid disruptions in functionality.

## Additional Information

For any further assistance or inquiries, please reach out to [your contact information here].

