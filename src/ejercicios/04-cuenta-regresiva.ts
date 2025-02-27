import { interval, map, take } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {
  const inicio = 7;
  const countdown$ = interval(700).pipe(
    take(inicio + 1),
    map(x => inicio - x)
  );
  // No tocar esta línea ==================
  countdown$.subscribe(console.log); // =
  // ======================================
})();