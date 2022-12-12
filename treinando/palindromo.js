/*Desenvolva um sistema que descubra se uma palavra ou frase é um palindromo*/

const palavra = "mariana";
var novaPalavra = "";

for (let i = 1; i <= palavra.length; i++) {
  const element = palavra[palavra.length - i];
  console.log(element);
  novaPalavra = novaPalavra + element;
}

console.log({ palavra, novaPalavra });

if (palavra === novaPalavra) {
  console.log("A palavra/frase é um palíndromo!");
} else {
  console.log("A palavra/frase NÃO é um palíndromo!");
}
