import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let getal1 = parseFloat(await userInput.question("Geef een getal 1 in: "));
let getal2 = parseFloat(await userInput.question("Geef een getal 2 in: "));

MaxMin(getal1, getal2);

function MaxMin(getal1, getal2)
{
    let min = Math.min(getal1, getal2);
    console.log("Het kleinste getal is " + min);
    let max = Math.max(getal1, getal2);
    console.log("Het grootste getal is " + max);
}