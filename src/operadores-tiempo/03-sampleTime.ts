import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
  sampleTime(3000), // En este caso es más eficiente colocarlo arriba debido a que no se alcanza a procesar la informacion
  map(({x, y}) => ({x, y}))
)
.subscribe(console.log);
