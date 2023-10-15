import { combineLatest, fromEvent, map, pluck } from "rxjs";

/* const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest([
  keyup$.pipe(pluck('code')),
  click$.pipe(map(ev => ev.type))
]).subscribe(console.log) */

// Ejemplo 2
const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@house-d.com';
input2.placeholder = '******';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) => fromEvent<KeyboardEvent>(elem, 'keyup').pipe(map(ev => ev.target['value']))

combineLatest([
  getInputStream(input1),
  getInputStream(input2)
]).subscribe(console.log)