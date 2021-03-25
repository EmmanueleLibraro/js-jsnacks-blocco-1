// Snack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

var somma = 0;
var volte = 5;

for ( var i = 0; i < volte; i++){
    var numeriUtente = parseInt ( prompt ("Inserire numeri " + i + " di " + volte) );
    somma += numeriUtente;
}

console.log("Tot", somma);