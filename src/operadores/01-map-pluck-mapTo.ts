import {fromEvent, range} from 'rxjs';
import {map, mapTo, pluck} from 'rxjs/operators';

/* range(1, 5)
  .pipe(
    map<number, string>(valor => `el valor es: ${valor * 10}`)
  )
  .subscribe(console.log); */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupMap$ = keyup$.pipe(
  map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
  pluck('target', 'baseURI') //El operador se descontinuó y se reemplaza por map
);

/* // reemplazo de pluck
const keyupPluck$ = keyup$.pipe(
  map(event => event.target['baseURI'])
); */

const keyupMapTo$ = keyup$.pipe(
  mapTo('Se opimió una tecla') //El operador se descontinuó y se reemplaza por map
);

keyupMap$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));