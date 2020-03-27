import { log } from './main';

const title = 'Typescript PlayGround';
const author = 'by Fabio Biondi';

log(`${title} ${author}` );

log('prova');

{
    const a = 'visibile solo nel blocco' // costante (block scope --> visibile sono nel blocco )
    let b = 'visibile solo nel blocco'; // block scope --> visibile sono nel blocco
    var c = 'visibile anche all\'esterno del blocco';
}

// costante
const user = {id: 1, name: 'luca'};

// nè possibile riassegnare un valore alla costante
// user = {} GENERA ERRORE

// però è possibile modificare il valore di una sua proprietà
user.id = 123;

log(user);
