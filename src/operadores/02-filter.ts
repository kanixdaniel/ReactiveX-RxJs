import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/* range(1, 10).pipe(
  filter( valor => valor % 2 === 1)
).subscribe(console.log); */

range(20, 30).pipe(
  filter( (valor, i) => {
    console.log('index', i)
    return valor % 2 === 1
  })
)//.subscribe(console.log);

interface Personaje {
  tipo  : string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'batman'
  },
  {
    tipo: 'heroe',
    nombre: 'robin'
  },
  {
    tipo: 'villano',
    nombre: 'joker'
  },
]

from<Personaje[]>(personajes).pipe(
  filter((personaje) => {
    return personaje.tipo === 'heroe';
  })
)//.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map(ev => ev.code), // <KeyboardEvent, string>
  filter(key => key === 'Enter') // <string, string>
);

keyup$.subscribe(console.log);