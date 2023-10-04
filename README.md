# node-deno-bun-load-testing

- `bun run index.ts` (Windows cihazda çalışmaz)
- `deno run index.ts`
- `node index.js`

Artillery Node 16 ve sonrasını gerektirir. 
Testler `artillery run DOSYA_ADI` şeklinde çalıştırılabilir.
---
## Sonuçlar
30 saniye boyunca her saniye 100 kullanıcının 10 kez istek yapması ile oluşan sonuçlar
### Deno
![Screenshot 2023-10-03 143223](https://github.com/anileates/node-deno-bun-load-testing/assets/49078844/d16d48ca-94b9-4f94-a557-98bb12f66f15)

### Node
![Screenshot 2023-10-03 142423](https://github.com/anileates/node-deno-bun-load-testing/assets/49078844/f7cbe869-d4fd-49ac-963d-8995f013ea36)

### Bun
![image](https://github.com/anileates/node-deno-bun-load-testing/assets/49078844/720082a6-c293-41bc-87a6-dd4cf62bb668)


## I/O with Mongo
### Node
![node](https://github.com/anileates/node-deno-bun-load-testing/assets/49078844/79bca919-cf59-4291-8578-7c72408c01ce)

### Deno
![deno](https://github.com/anileates/node-deno-bun-load-testing/assets/49078844/e51761d0-73a1-41b9-aea0-dd53a9554ec4)

### Bun
![bun](https://github.com/anileates/node-deno-bun-load-testing/assets/49078844/e994ed09-d43d-456a-aee6-d4798aa5b57b)
