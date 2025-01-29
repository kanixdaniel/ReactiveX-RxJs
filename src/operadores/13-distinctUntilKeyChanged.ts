import { distinctUntilKeyChanged, from } from "rxjs";

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'robin'
  },
  {
    tipo: 'villano',
    nombre: 'pingüino'
  },
  {
    tipo: 'villano',
    nombre: 'pingüino'
  },
  {
    tipo: 'heroe',
    nombre: 'Zenitsu'
  },
  {
    tipo: 'villano',
    nombre: 'pingüino'
  },
];

from(personajes).pipe(
  distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)