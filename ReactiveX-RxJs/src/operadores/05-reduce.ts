import { interval, reduce, take, tap } from "rxjs";

// Acumulador de JS
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);

console.log('total arr', total) // output 15

// Acumulador con RxJs
interval(600).pipe(
  take(6),
  tap(console.log),
  reduce(totalReducer, 5)
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
})