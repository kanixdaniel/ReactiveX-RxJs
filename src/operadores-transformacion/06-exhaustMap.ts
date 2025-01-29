import { exhaustMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent(document, 'click');
const interval$ = interval(500);

click$.pipe(
  exhaustMap(() => interval$.pipe(take(3)))
).subscribe(console.log)