/*The genesis of my JS journey
Started: Thursday June 20th, 2024
Aim: to learn fundamental JS programming by building a Pyramid Generator*/

//defining variables
const character = "*";
const count = 8;
const rows = [];
let inverted = false;
let result = ""

//function definition
function padRow(rowNumber, rowCount) {
    const numberOfSpaces = (rowCount - rowNumber);
    const numberOfCharacters = (2 * rowNumber - 1);

    return " ".repeat(numberOfSpaces) + character.repeat(numberOfCharacters) + 
    " ".repeat(numberOfSpaces);
}

//defining the for loop with array methods
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

//defining the loop to iterate over the rows array
for (const row of rows) {
    result = result + "\n" + row;
}

//printing the result to the console
console.log(result);

// TODO: use a different type of loop

/*while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}*/
