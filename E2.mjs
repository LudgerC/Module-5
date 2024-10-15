import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let vormen = await userInput.question("wilt u een Cirkel, Driehoek, Rechthoek of een Vierkant? ")

if(vormen == 'Cirkel')
{
    let straal = parseFloat(await userInput.question("Geef de straal van de cirkel: "));
    cirkel(straal)
}
else if(vormen == 'Driehoek')
{

}
else if(vormen == 'Rechthoek')
{
        
}
else if(vormen == 'Vierkant')
{
    
}

function cirkel(straal)
{
  let berekening = (Math.PI * straal * straal);

}