import { catchError, exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper
const solicitudLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
  map(resp => resp.response),
  catchError(err => of({}))
);

// Formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones del form
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
  .pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
      email: ev.target[0].value,
      password: ev.target[1].value,
    })),
    // mergeMap(solicitudLogin)
    // switchMap(solicitudLogin)
    exhaustMap(solicitudLogin)
  );

submitForm$.subscribe(token => console.log(token))