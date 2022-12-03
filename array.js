const lista = [0, 5, 9, 88, 40, -8];
const pares = [];
const impares = [];
const listaDobro = [];

function isPar(numero) {
  if (numero % 2 == 0) {
    return true;
  }
  return false;
}

function dobro(numero) {
  return numero * 2;
}

//console.log(isPar(9));

// for (let i = 0; i < lista.length; i++) {
//   const element = lista[i];
//   console.log(isPar(element));
// }

// lista.forEach(function (item, i) {
//   console.log({ item, i });
//   console.log(isPar(item));
//   if (isPar(item)) {
//     pares.push(item);
//   } else {
//     impares.push(item);
//   }
// });

// console.log(lista.filter(isPar));

// console.log(
//   lista.filter(function (item) {
//     return !isPar(item);
//   })
// );

pares.push(...lista.filter((item) => isPar(item)));
impares.push(...lista.filter((item) => !isPar(item)));

console.log(
  pares.findIndex(function (item) {
    return item == 40;
  })
);

// console.log(
//   lista.map(function (item) {
//     return dobro(item);
//   })
// );
// console.log(lista.map(dobro));

listaDobro.push(...lista.map(dobro));

console.log({ pares, impares, listaDobro });
console.log(dobro(2));
