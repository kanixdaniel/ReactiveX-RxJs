import { concat, interval, of, take } from "rxjs"

const inetrval$ = interval(1000);

concat(
  inetrval$.pipe(take(3)),
  inetrval$.pipe(take(2)),
  [1, 2, 3],
  of(1)
).subscribe(console.log)