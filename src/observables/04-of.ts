import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 8, 10, 12, 14);
const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));

console.log('Inicio del obs$');
obs$.subscribe({
  next: (value) => console.log('next', value),
  error: null,
  complete: () => console.log('Se termina secuencia')
});

console.log('Fin del obs$');