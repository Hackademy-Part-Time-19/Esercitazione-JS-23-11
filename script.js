let lista = ["Fabiano", "Maria", "João", "Pedro", "Ana"];
let Interfaccia = 0;

while(Interfaccia != 9 ){
 Interfaccia = parseInt(prompt("Ciao! Qui abbiamo questa lista!<br> Se vuoi cambiare la lista premi: <br> 1: Aggiungi Elemento alla lista <br> 2: Rimuovi elemento da lista <br> 3: Ordina la lista in ordine alfabetico <br> 4: Modifica Elemento nella lista <br> 5: Elimina intera lista <br> 0: Visualizza la lista:<br> 9: Torna all'inizio!"));
if(Interfaccia == 0){
    VisualizzaLista();
}

if(Interfaccia == 1){
    AggiungiLista();
}
if(Interfaccia == 2){
    RimuoviLista();
}
if(Interfaccia == 3){
    OrdinaLista(lista);
}

if(Interfaccia == 4){
    ModificaLista();
}

if(Interfaccia == 5){
    EliminaLista(lista);
}
if( Interfaccia == 6){
    VisualizzaLista();
}
}


function AggiungiLista(){
    let nuovoNome = prompt("Inserisci nuovo nome: ");
    lista.push(nuovoNome);
    alert("Perfetto hai aggiunto il tuo nuovo nome: " + nuovoNome);
    return nuovoNome
}

function RimuoviLista(nome){
    lista.forEach(elemento => {
        console.log(elemento);
    })
    let nomeEliminato = prompt("Inserisci il nome da rimuovere: ");
    lista.splice(lista.indexOf(nomeEliminato), 1);
    alert("Perfetto hai rimosso il seguente nome: " + nomeEliminato);
    lista.forEach(elemento => {
        console.log(elemento);
    })
    return nomeEliminato
}

function OrdinaLista(lista){
    lista.sort((a, b) => a.localeCompare(b));
    alert("Perfetto hai ordinato la lista in ordine alfabetico!");
    console.log(lista);
    return lista
}

function ModificaLista(nome){
    let nuovoNome = prompt("Inserisci nuovo nome: ");
    lista[lista.indexOf(nome)] = nuovoNome;
    alert("Perfetto hai modificato il seguente nome: " + nuovoNome);
    return nuovoNome
}

function EliminaLista(lista){
 lista = [];
 alert("Perfetto hai cancellato la lista!");
 console.log(lista);
}

function VisualizzaLista(){
lista.forEach(elemento => {
    console.log(elemento);
});

}