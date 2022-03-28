
/////////// Esercizio 1
// Scrivi un programma che stampi in console i numeri da 1 a 100.

// let maxNum = 100;

// for (a = 1; a <= maxNum; a++){
//     console.log(a);
// };

////////// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// let maxNum = 100;

// for (a = 1; a <= maxNum; a++){
//     if (a % 3 === 0) {
//         console.log(a + ' ' + 'è Fizz');
//         if (a % 5 === 0) {
//             console.log(a + ' ' + 'è FizzBuzz');
//         }
//     } else if (a % 5 === 0) { 
//         console.log (a + ' ' + 'è Buzz');
//         if (a % 3 === 0) {
//             console.log(a + ' ' + 'è FizzBuzz');
//         }
//     } else {
//         console.log(a);
//     }
// };

///////// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

        // <h1>Esercizio Fizz and Buzz</h1>
        // <div class="row text-center g-3">
        //     <div class="col-12 col-sm-6 col-md-4 col-md-2 gap-2">
        //         <p class="text-container rounded-pill">
                    
        //         </p>
        //     </div>
        // </div>

const father = document.getElementById('container');
father.setAttribute('class', 'container text-center mt-5');

const h1 = document.createElement('h1');
h1.innerHTML = 'Esercizio Fizz and Buzz';
father.append(h1);

const row = document.createElement('div');
row.setAttribute('class', 'row g-3')
father.append(row);

let maxNum = 100;

for (a = 1; a <= maxNum; a++){
    const col = document.createElement('div');
    col.setAttribute('class','col-12 col-sm-6 col-md-4 col-lg-3 gap-2');

    const p = document.createElement('p');
    p.setAttribute('class','text-container rounded-pill');


    if (a % 3 === 0) {
        p.innerHTML = `${a} è Fizz`;
        if (a % 5 === 0) {
            p.innerHTML = `${a} è FizzBuzz`;
        }
    } else if (a % 5 === 0) { 
        p.innerHTML = `${a} è Buzz`;
        if (a % 3 === 0) {
            p.innerHTML = `${a} è FizzBuzz`;
        }
    } else {
        p.innerHTML = `${a}`;
    }

    col.append(p);
    row.append(col);
};