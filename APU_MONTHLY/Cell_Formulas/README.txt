
Sure, here's a sample README explaining the usage of the formulas you provided for the APU Monthly graph:

---

# APU Monthly Graph Formulas README

This document provides a guide on how to use the formulas in the APU Monthly graph spreadsheet to fetch data from different sources and create the required graph.

## Introduction

The APU Monthly graph spreadsheet utilizes various formulas to import data from different URLs and cells. It's designed to generate a graph based on specific dates and shifts.

## Formula Usage

### Formula 1

**Purpose:** This formula imports data from the LC2 VRO Times page URL.

1. Replace `{URL}` with the actual URL of the LC2 VRO Times page.
2. Replace `{DATECELL}` with the cell containing the date, e.g., `B7`.
3. Replace `{SHIFTCELL}` based on the shift you need:
   - For 1st shift, use `K6`.
   - For 2nd shift, use `K20`.
   - For 3rd shift, use `K34`.

The formula will create a text string representing the date and shift and fetch the required data. Any errors will result in a blank cell.

**Formula Example:**
```excel
=IFERROR(
  IMPORTRANGE(
    "{URL}",
    TO_TEXT(MONTH({DATECELL}) & "/" & DAY({DATECELL}) & "/" & RIGHT(YEAR({DATECELL}), 2) & "!{SHIFTCELL}")
  ),
  ""
)
```

## Usage Steps

1. Open the APU Monthly graph spreadsheet.
2. Locate the cells with the formulas, typically where the graph data should appear.
3. In each formula, substitute placeholders with actual values:
   - Replace `{URL}` with the appropriate URL.
   - Replace `{DATECELL}` with the cell containing the date.
   - Replace `{SHIFTCELL}` with the corresponding cell for the desired shift.
4. The formulas will automatically import and format the data based on the provided inputs.
5. Observe the graph being updated with the imported data.

## Conclusion

By following the steps outlined in this README, you can effectively use the provided formulas to populate the APU Monthly graph with data fetched from different sources. Make sure to adjust the placeholders with accurate URLs, cell references, and shift options as needed.

For any troubleshooting or additional information, feel free to reach out to the designated support personnel.

---

Please ensure to customize this README according to your spreadsheet environment and the specific details of your use case.
