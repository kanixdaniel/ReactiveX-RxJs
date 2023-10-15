import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GitHubUsersResp } from "../interfaces/github-users.interface";
import { GitHubUser } from "../interfaces/github-user.interface";

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuario = (usuarios: GitHubUser[]) => {
  orderList.innerHTML = '';
  for (const usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
}

// streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// Set de operadores
input$.pipe(
  debounceTime<KeyboardEvent>(500),
  map<KeyboardEvent, string>(ev => ev.target['value']),
  mergeMap<string, Observable<GitHubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
  map<GitHubUsersResp, GitHubUser[]>(user => user.items)
)//.subscribe(mostrarUsuario);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
  map<KeyboardEvent, string>(ev => ev.target['value']),
  switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log)