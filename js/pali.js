// Chiedere all'utente di inserire una parola
const wordUser = prompt("Inserisci una parola"); // pippo
// Dichiaro una costante che prenda l'ultimo elemento/indice della parola inserita dall'utente
const lastElement = wordUser.at(-1); // o
const lastIndex = wordUser.length -1; // 4
// Primo elemento
const firstElement = wordUser[0]; // p


// Creo un ciclo for che mi stampi la parola inserita dall'utente ma al contrario
for (let index = lastIndex; index >= 0; index--){
    const reverseWord = wordUser[index];
    console.log(reverseWord);
   
}
// Creo una funzione per capire se la parola inserita è palindroma (cioè se la parola inserita dall'utente anche se letta al contrario è uguale)
  // La funzione deve ritornare true se la parola è palindroma
  // Dev ritornare false se la parola non è palindroma
// Stampare in console un messaggio per dire all'utente se la parola che ha inserito è palindroma oppure no

const result = wordPalindrome(wordUser);
console.log(result)

function wordPalindrome (wordUser){

    if (wordUser === reverseWord){
        return true
    } else {
        return false
    }

}
 