
import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

/* ajax.put(url, {
  id: 1,
  nombre: 'Kanix'
}, {
  'mi-token': 'ksdhk42'
}).subscribe(console.log) */

ajax({
  url,
  method: 'POST',
  headers: {
    'mi-token': 'ksdhk42'
  },
  body: {
    id: 1,
    nombre: 'Kanix'
  }
}).subscribe(console.log)