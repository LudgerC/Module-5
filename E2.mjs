import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let vormen = await userInput.question("wilt u een Cirkel, Driehoek, Rechthoek of een Vierkant? ");

if(vormen == 'Cirkel')
{
  let straal = parseFloat(await userInput.question("Geef de straal van de cirkel: "));
  cirkel(straal);
  console.log(cirkel(straal));
}
else if(vormen == 'Driehoek')
{
  let basis = parseFloat(await userInput.question("Geef de basis van het driehoek: "));
  let hoogte = parseFloat(await userInput.question("Geef de hoogte van het driehoek: "));
  driehoek(basis, hoogte)
  console.log(driehoek(basis, hoogte));
}
else if(vormen == 'Rechthoek')
{
  let zijde1 = parseFloat(await userInput.question("Geef een zijde van het rechthoek(1): ")); 
  let zijde2 = parseFloat(await userInput.question("Geef een zijde van het rechthoek(2): "));
  rechthoek(zijde1, zijde2);
  console.log(rechthoek(zijde1, zijde2));     
}
else if(vormen == 'Vierkant')
{
  let zijde = parseFloat(await userInput.question("Geef een zijde van het vierkant: "));
  vierkant(zijde);
  console.log(vierkant(zijde));  
}
else
{
  console.log("Ongeldige keuze! ");
}

function cirkel(straal)
{
  let berekening = (Math.PI * straal * straal);
  return berekening;
}
function driehoek(basis, hoogte)
{
  let berekening = (basis * hoogte) / 2;
  return berekening;
}
function rechthoek(zijde1, zijde2)
{
  let berekening = (zijde1 * zijde2);
  return berekening;
}
function vierkant(zijde)
{
  let berekening = (zijde * zijde);
  return berekening;
}