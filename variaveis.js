// var fruta = 'banana';
// let contador = 1;
// const PI = 3.14;

// console.log(contador);

// console.log(PI * contador);

// console.log(fruta);

// contador = 5;

// console.log(contador);

// console.log(PI * contador);

// const nome = 'Mariana'
// const sobrenome = 'Vida'
// const nomecompleto = `${nome} ${sobrenome}`

// console.log(nomecompleto)

// number
let contador = 0.25

// string
const nome = 'Mariana'

// boolean (verdadeiro ou falso)
const calor = true
const frio = false

// array (lista)
const listadecompras = ['arroz', 'feijão', 'batata']

// object (pode colocar vários atributos)
const pessoa3 = {
    nome: 'Mariana',
    idade: 25,
    sms: false,
    pets: ['Babi', 'Tiquinho', 'Tom']
}

// date
const aniversario = new Date('1996-04-11')

// function
function calcularTaxa (valor) {
    return valor * 1.5
}
const valortotal = calcularTaxa(10)
console.log(valortotal)

function criarPessoa (nome, idade, sms, pets) {
   const pessoa = {
        nome: nome,
        idade: idade,
        sms: sms,
        pets: pets,
        addPet: function (nomePet) {
            this.pets.push(nomePet)
        }
    }
    
    return pessoa
}

const pessoa = criarPessoa('Itor', 25, true, ['Floquinho', 'Pelota'])
console.log(pessoa);
pessoa.addPet('Kiko')
console.log(pessoa);

console.log(this);