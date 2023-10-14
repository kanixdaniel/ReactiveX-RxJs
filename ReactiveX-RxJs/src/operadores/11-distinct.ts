import { distinct, from, of } from "rxjs";

const numeros$ = of(1, 2, 1, 3, 4, 4, 5, 6, 7, 2, 3, 1, 5, 44, '1', true, true);

numeros$.pipe(
  distinct()
)
.subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'megaman'
  },
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
    nombre: 'Thanos'
  },
  {
    tipo: 'heroe',
    nombre: 'Naruto'
  },
  {
    tipo: 'villano',
    nombre: 'Douma'
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
  distinct(p => p.nombre)
)
.subscribe(console.log)