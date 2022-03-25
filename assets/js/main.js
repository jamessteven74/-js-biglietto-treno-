/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

*/

//chiedere all'utente il numero  di chilometri che vuole percorrere


const numbers_km = parseInt(prompt("quanti chilometri devi percorrere?"));
console.log(numbers_km)
//50 km
document.getElementById('numbers_km').innerHTML = numbers_km;


//età del passeggero
const user_age = parseInt(prompt ("quanti anni hai?"));
console.log(user_age)
//70 anni
document.getElementById('user_age').innerHTML = user_age;


//costo del biglietto
const price_km = 0.21;
console.log(price_km)

const prezzo_standard = numbers_km * price_km;
console.log(prezzo_standard)

//prezzo per over 65
const prezzo_over_65 = prezzo_standard - (prezzo_standard * 0,4)
console.log(prezzo_over_65)

//prezzo per minorenne
const prezzo_minorenne = prezzo_standard - (prezzo_standard * 0.2)
console.log(prezzo_minorenne)

if (user_age < 18){
    prezzo_minorenne

} else if (user_age > 65){
    prezzo_over_65
}













