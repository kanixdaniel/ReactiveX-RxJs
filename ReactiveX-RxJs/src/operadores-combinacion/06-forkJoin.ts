import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4);
const inetrval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

/* forkJoin([
  numeros$,
  inetrval$, 
  letras$
]).subscribe(console.log) */

/* forkJoin([
  numeros$,
  inetrval$, 
  letras$
]).subscribe(resp => {
  console.log('numeros:', resp[0])
  console.log('intervalo:', resp[1])
  console.log('letras:', resp[2])
}) */

forkJoin({
  num: numeros$,
  int: inetrval$, 
  let: letras$
}).subscribe(resp => {
  console.log(resp)
})
