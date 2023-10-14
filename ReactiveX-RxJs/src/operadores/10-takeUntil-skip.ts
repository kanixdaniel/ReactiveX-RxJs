import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ =  fromEvent<PointerEvent>(boton, 'click');
const clickBtn$ =  fromEvent<PointerEvent>(boton, 'click').pipe(
  tap(() => console.log('tap antes del skip')),
  skip(1),
  tap(() => console.log('tap despues del skip'))
);

counter$.pipe(
  takeUntil(clickBtn$)
)
.subscribe({
  next: val => console.log('next:', val),
  error: err => console.error('error:', err),
  complete: () => console.info('Complete')
});