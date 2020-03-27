import { log } from './main';

const user = { id: 1, name: 'luca' };
const details = { surname: 'pascucci', age: 27 };

const name = "Luca";
const surname = "Pascucci";
const age = 27;

const a = [1, 2];

//Oggetto complesso
const marker = {
    id: 1, coords: {
        lat: 100, lng: 100
    }
};

// Aggiunge una nuova proprietà all'array
user.age = 20;

log(user);

// Luca Pascucci 27
log(name + ' ' + surname + ' (' + age + ')');

// Utilizzando backtick (ES6) che poi verrà convertita dal "compilatore" in (ES5) ossia come sopra
log(`${name} ${surname} (${age})`);

//IMMUTABILITA'

// const b = a //valorizzazione varibile (per riferimento)

/**
 * spread operator ...array -> estrapola i valori dall'array
 * il compilatore lo tramuta nel metodo .concat() di (ES5)
 */
const b = [...a, 3, 4];
const c = [...a, 3, 4, 5, ...a];

log(a);
log(b);
log(c);

// Clonare un'oggetto semplice
const newUser = Object.assign({}, user, details); // inserendo un array vuoto viene non funziona con oggetti innestati
newUser.id = 123;

log(user);
log(newUser);

// Clonare un'oggetto complesso (oggetti innestati) con Object.assign()
const cloned = Object.assign({}, marker);
cloned.coords = Object.assign({}, marker.coords, { lat: 10000 }); // è necessario utilizzare lo stesso metodo per la parte interna

// Clonare un'oggetto con lo spread Operator
const cloned2 = { ...marker };
cloned2.id = 123;
cloned2.coords = { ...marker.coords, lat: 1000 };

log(marker);
log(cloned2);