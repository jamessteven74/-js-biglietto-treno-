/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

*/

//chiedere all'utente il numero  di chilometri che vuole percorrere
const numbers_km = prompt("quanti chilometri devi percorrere?");
console.log(numbers_km)
//50 km

document.getElementById('numbers_km').innerHTML = numbers_km

//età del passeggero
const user_age = prompt ("quanti anni hai?");
console.log(user_age)
//70 anni

document.getElementById('user_age').innerHTML = user_age

// prezzo del biglietto
let x = 70;
let Y = 0.21;
let z = x*z;

