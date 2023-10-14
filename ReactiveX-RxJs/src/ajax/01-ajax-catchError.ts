import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
  if (!response.ok) throw new Error(response.statusText);

  return response
}

const atrapaError = (error: AjaxError) => {
  console.warn('error en:', error.message);
  return of({});
}

const fetchPromesa = fetch(url);

// Peticiones usando Fetch API

/* fetchPromesa
  .then(resp => resp.json())
  .then(data => console.log('data:', data))
  .catch( err => console.warn('error en usuarios', err)) */

/* fetchPromesa
  .then(manejaErrores)
  .then(resp => resp.json())
  .then(data => console.log('data:', data))
  .catch( err => console.warn('error en usuarios', err)) */

// Peticiones usando RxJx Ajax

ajax(url).pipe(
  map(resp => resp.response),
  catchError(atrapaError)
)
.subscribe(users => console.log('usuarios:', users))