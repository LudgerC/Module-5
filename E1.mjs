import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question("Geef getal 1 in: "));
let getal2 = parseFloat(await userInput.question("Geef getal 2 in: "));


som(getal1, getal2)
console.log("Het som is: " + som)


function som(getal1, getal2)
{
    som = getal1 + getal2;
    return som;
}