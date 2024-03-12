// Chiedere all'utente di inserire una parola
const wordUser = prompt("Inserisci una parola");
// Dichiaro una costante che prenda l'ultimo elemento/indice della parola inserita dall'utente
const lastElement = wordUser.at(-1);
const lastIndex = wordUser.length -1;
// Primo elemento
const firstElement = wordUser[0];
// const lastElement = wordUser[lastIndex];
// Creo un ciclo for che mi stampi la parola inserita dall'utente ma al contrario
for (let index = lastIndex; index >= firstElement; index--){
    console.log(index)
   
}
// Creo una funzione per capire se la parola inserita è palindroma (cioè se la parola inserita dall'utente anche se letta al contrario è uguale)
  // La funzione deve ritornare true se la parola è palindroma
  // Dev ritornare false se la parola non è palindroma
// Stampare in console un messaggio per dire all'utente se la parola che ha inserito è palindroma oppure no
function wordPalindrome (word){

}
 