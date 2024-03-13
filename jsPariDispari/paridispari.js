// Utente sceglie pari o dispari e inserisce un numero da 1 a 5
  // Tramite prompt gli diciamo di inserire pari o dispari
  const userChoiceEvenOrOdd = prompt("Inserisci pari se scegli pari, inserisci dispari se scegli dispari");
  // Tramite prompt gli diciamo di inserire un numero da 1 a 5
  const userNumberChoice = parseInt(prompt("Scegli un numero da 1 a 5"));
// Generiamo un numero random da 1 a 5 per il computer (usando una funzione)
const randomNumber = parseInt(Math.floor(Math.random()*5) + 1);

// Sommiamo i due numeri
const sum = userNumberChoice + randomNumber;
console.log("la somma fa " + sum)

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function evenOrOdd (num){

    if (num % 2 === 0){
        return true
    } else {
        return false
    }

}
const result = evenOrOdd(sum);
console.log(result)


// Dichiariamo chi ha vinto
  // SE utente ha scelto pari e la somma dei due numeri pari  OR utente ha scelto dispari e la somma dei numeri è dispari, ha vinto l'utente
    // SE userChoiceEvenOrOdd === pari AND la somma è pari 
    if (userChoiceEvenOrOdd === "pari" && evenOrOdd(sum)){
        // Utente vince
        console.log("L'utente vince!")
    // INVECE SE userchoice === dispari          AND  la somma è dispari
    } else if (userChoiceEvenOrOdd === "dispari" && !evenOrOdd(sum)) {
        // Utente vince
        console.log("L'utente vince!")
        // ALTRIMENTI vince il pc
    } else {
        console.log("Il computer vince")
    }