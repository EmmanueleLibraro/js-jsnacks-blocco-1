// Snack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// var somma = 0;
// var volte = 5;

// for ( var i = 0; i < volte; i++){
//     var numeriUtente = parseInt ( prompt ("Inserire numeri " + i + " di " + volte) );
//     somma += numeriUtente;
// }

// console.log("Tot", somma);

// Snack 2
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// var utente = parseInt ( prompt("Inserisci un numero") );

// if ( utente % 2 === 0){
//     console.log("Numero pari");
// }else if ( utente % 2 !== 0){
//     console.log("Numero dispari");
// }

// Snack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ["fabio", "lorenzo", "paolo", "alberto"];
var cognomi = ["rossi", "bianchi", "verdi", "blu"];

var numeroPreLista = 3;

var lista = "";

for ( var i = 0; i < numeroPreLista; i++){
    lista += nomi[Math.floor(Math.random() * nomi.length)];
    console.log(lista);
}

for ( var i = 0; i < numeroPreLista; i++){
    lista += cognomi[Math.floor(Math.random() * cognomi.length)];
    console.log(lista);
}
