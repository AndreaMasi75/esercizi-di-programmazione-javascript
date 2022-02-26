/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
let secTot = 22580;
let hours = Math.floor(secTot/3600);
let minutes = Math.floor((secTot-(hours*3600))/60);
let seconds = Math.floor(secTot-(hours*3600+minutes*60));

console.log(`${secTot} secondi equivalgono a: ${hours} ore, ${minutes} minuti e ${seconds} secondi.`);
