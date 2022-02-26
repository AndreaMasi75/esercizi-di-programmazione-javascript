/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

let currYear = 2022;
let yearBorn = 1981;

let age = currYear-yearBorn;
let to100 = 100-age;

console.log(`Anno di nascita ${yearBorn}; anno corrente ${currYear}. La persona indicata ha ${age} anni e le mancano ${to100} anni per raggiungere i cento anni.`);
