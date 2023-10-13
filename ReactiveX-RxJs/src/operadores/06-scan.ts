import { from, map, reduce, scan } from "rxjs";

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, curr) => acc + curr;

// Reduce
from(numeros).pipe(
  reduce(totalAcumulador, 0)
)
.subscribe(console.log);

// Scan
from(numeros).pipe(
  scan(totalAcumulador, 0)
)
.subscribe(console.log);

// Redux

interface Usuario {
  id?         : string;
  autenticado?: boolean;
  token?      : string;
  edad?       : number;
}

const user: Usuario[] = [
  {id: 'kdp', autenticado: false, token: null},
  {id: 'kdp', autenticado: true, token: 'akdjgh'},
  {id: 'kdp', autenticado: true, token: 'kjhgfv'},
];

const state$ = from(user).pipe(
  scan<Usuario, Usuario>((acc, curr) => {
    return {...acc, ...curr}
  }, {edad: 26})
);

const id$  = state$.pipe(
  map(state => state.id)
);

id$.subscribe(console.log)