import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let min = 1;
let max = 10;
let gebruiker = parseFloat(await userInput.question("Geef een getal tussen 1 en 10: "));
let computer = random(min, max);


if(gebruiker < computer)
{
    console.log("Het getal moet hoger zijn!");
}
else if(gebruiker > computer)
{
    console.log("Het getal moet lager zijn!");
}
else if(gebruiker == computer)
{
    console.log("Jij heb het juiste getal gevonden! ");
}
    

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}