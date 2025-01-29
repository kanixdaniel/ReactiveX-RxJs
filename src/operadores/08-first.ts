import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
  tap<PointerEvent>(console.log),
  map(({clientX, clientY}) => ({clientY,clientX})),
  first( ev => ev.clientY >= 150)
)
.subscribe({
  next: val => console.log('next:', val),
  error: err => console.error('error:', err),
  complete: () => console.info('Complete')
})