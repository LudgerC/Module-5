import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let getal = parseFloat(await userInput.question("Geef een getal in: "));
let maal;

do
{
    if(getal < 1)
    {
        console.error("Getal moet 1 of hoger zijn!");
        getal = parseFloat(await userInput.question("Geef een getal in: ")); 
        
    }

}while(getal < 1);


//factorial(getal);
for(let i = 1; getal >= i; i++)
{ 
    process.stdout.write(i + " X "); 
    
}





/*function factorial(getal)
{
    for(let i = 1; getal < i; i++)
    { 
      process.stdout.write(i + " X "));
    }
}*/