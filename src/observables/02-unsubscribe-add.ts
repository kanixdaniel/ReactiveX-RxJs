import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>(subscriber => {
  // Contador por segundo
  let contador: number = 0;
  const interval = setInterval(() => {
    contador += 1;
    subscriber.next(contador);
    console.log(contador);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500)

  return () => {
    clearInterval(interval);
    console.log('Fin del intervalo');
  }
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2);
subscription2.add(subscription3);

setTimeout(() => {
  /* subscription1.unsubscribe();
  subscription2.unsubscribe();
  subscription3.unsubscribe(); */

  subscription1.unsubscribe();

  console.log('Fin del timeout');
}, 6000)
