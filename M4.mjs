import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question("Geef een getal in: "));
let som = 0;

delers(getal);

function delers(getal)
{
for(let i = 1; (getal - 1) >= i; i++)
    {
        if(getal % i == 0)
        {
            if(i == 1)
            {
                process.stdout.write("" + i);
            }
            else
            {
                process.stdout.write(" + " + i);
            }
          som += i;  
        }
        
    
    }
    process.stdout.write(" = " + som);
    
}