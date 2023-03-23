
/*
1-Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    -input

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
2-il prezzo del biglietto è definito in base ai km (0.21 € al km)
    -input km * 0.21

3-va applicato uno sconto del 20% per i minorenni
    -if minorenni: prezzo - 20%

4-va applicato uno sconto del 40% per gli over 65.
    -if over 65: prezzo - 40%

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

function creazioneBiglietto(){

    let km = document.getElementById('numeroKm').value;
    let eta = document.getElementById('etaPasseggero').value;

    let prezzoKm = km * 0.21; 

    const sconto1 = prezzoKm * 0.2;
    const sconto2 = prezzoKm * 0.4;
    
    if(eta < 18){
        prezzoKm = prezzoKm - sconto1;
    }
    else if(eta > 65){
        prezzoKm = prezzoKm - sconto2;
    }

    document.getElementById('prezzoFinale').innerHTML = `Il prezzo del biglietto è: ${prezzoKm.toFixed(2)}€ `;
}