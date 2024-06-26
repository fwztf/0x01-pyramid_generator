# Pyramid Generator
This project generates a character-patterned pyramid 
using a specified character and count. 
The generated pattern can be normal or inverted, based on the "inverted" flag.

# Code Overview
Variables
character: The character used to create the pattern.
count: The number of rows in the pattern.
rows: An array to store each row of the pattern.
inverted: A boolean flag to determine if the pattern should be inverted.
result: A string to store the final pattern output.

Functions
padRow(rowNumber, rowCount)
This function pads a row with spaces and characters to create a 
symmetric pattern.
rowNumber: The current row number.
rowCount: The total number of rows.
Returns a string representing the padded row.


Pattern Generation
A for loop iterates from 1 to count to generate each row using the padRow 
function. Rows are added to the rows array. 
If inverted is true, rows are unshifted (added to the beginning); 
otherwise, they are pushed (added to the end).

Result Construction
A second for loop iterates over the rows array to concatenate each row into 
the result string, separated by newline characters.
