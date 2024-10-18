import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question("Geef een getal in: "));
let som = 0;

for(let i = 1; getal >= i; i++)
{
    if(getal % i == 0)
    {
    
    }
console.log(som);
}
