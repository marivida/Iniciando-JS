const nomes = [
  "Mariana Vida",
  "Itor Isaias da Silva",
  "Thaina da Silva",
  "Rosemeire de Oliveira",
  "Thais Carolina da silva",
];
const nomesGrandes = [];
const sobrenomeSilva = [];
const nomesCriptografados = [];

function contemSilva(nome = "") {
  return nome.toUpperCase().includes("SILVA");
}

function nomeGrande(nome = "") {
  return nome.length > 20;
}

function criptografar(nome) {
  return nome
    .replaceAll("a", 4)
    .replaceAll("e", 3)
    .replaceAll("i", 1)
    .replaceAll("o", 0)
    .replaceAll("u", 7);
}

sobrenomeSilva.push(...nomes.filter((item) => contemSilva(item)));
nomesGrandes.push(...nomes.filter((item) => nomeGrande(item)));
nomesCriptografados.push(...nomes.map(criptografar));

console.log({ sobrenomeSilva, nomesGrandes, nomesCriptografados });
console.log("Mariana Vida".replaceAll("a", 4).replaceAll("i", 1));
console.log(
  nomes.find(function (item) {
    return item.toUpperCase().includes("ITOR");
  })
);
