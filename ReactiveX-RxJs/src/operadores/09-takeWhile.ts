import { fromEvent, map, takeWhile } from "rxjs";

const click$ =  fromEvent<PointerEvent>(document, 'click');

click$.pipe(
  map(({x , y}) => ({x, y})),
  // takeWhile(({y}) => y <= 150)
  takeWhile(({y}) => y <= 150, true) // true indica que emita el valor que rompio la condición
)
.subscribe({
  next: val => console.log('next:', val),
  error: err => console.error('error:', err),
  complete: () => console.info('Complete')
});