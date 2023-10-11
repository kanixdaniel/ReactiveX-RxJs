import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>(subscriber => {
  const intervalID = setInterval(
    () => subscriber.next( Math.random()), 1000
  );

  return () => {
    clearInterval(intervalID);
    console.log('intervalo destruido')
  };
});

/** Caracteristicas de un Subject
 * 1.- Casteo multiple
 * 2.- Tambien es un observer
 * 3.- Next, error, complete
 *  */

const subject$ = new Subject();
const subs = intervalo$.subscribe(subject$)

// const subs1 = intervalo$.subscribe(rnd => console.log('sibs1 ' + rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('sibs2 ' + rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subs.unsubscribe();
}, 3500);