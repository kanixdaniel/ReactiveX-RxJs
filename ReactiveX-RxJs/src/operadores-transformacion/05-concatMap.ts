import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

const click$ = fromEvent(document, 'click');
const interval$ = interval(500);

click$.pipe(
  // switchMap(() => interval$)
  concatMap(() => interval$.pipe(take(8)))
).subscribe(console.log)