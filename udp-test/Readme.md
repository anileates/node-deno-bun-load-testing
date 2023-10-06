1000 UDP isteği ile yapılmıştır.

### Deno
- Native UDP desteği henüz stable versiyonda yok, unstable versiyonda çıkan sonuç:
  ![deno](https://github.com/anileates/node-deno-bun-load-testing/assets/49078844/08e512b0-cf39-4541-a864-3f230362ec61)

## Node
![node1](https://github.com/anileates/node-deno-bun-load-testing/assets/49078844/e4663c3e-f2bd-44d2-9d13-dea381e5c963)

## Bun
- `dgram` desteği bulunmadığı için UDP sunucusu oluşturulamıyor.
