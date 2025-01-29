
import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbinxx.org/delay/1';

const manejaError = (error: AjaxError) => {
  console.warn('error en:', error.message);
  return of({
    ok: false,
    usuarios: []
  });
}

/* const obs$ = ajax.getJSON(url).pipe(
  catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
  catchError(manejaError)
); */

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs2$.subscribe(data => console.log('ajax:', data));
obs$.pipe(
  catchError(manejaError)
)
.subscribe({
  next: val => console.log('next:', val),
  error: err => console.warn('error en subs:', err),
  complete: () => console.info('Complete')
});