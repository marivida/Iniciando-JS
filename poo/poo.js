class Proprietario {
  nome;
  /** @type {Veiculo[]} */
  veiculos = [];

  constructor(nome) {
    this.nome = nome;
    this.veiculos = [];
  }

  adicionarVeiculos(veiculo) {
    this.veiculos.push(veiculo);
  }

  calcularIpva() {
    let valorIpva = 0;
    for (let i = 0; i < this.veiculos.length; i++) {
      const veiculo = this.veiculos[i];
      valorIpva += veiculo.valorIpva();
    }
    return valorIpva;
  }
}

class Veiculo {
  modelo;
  ano;
  valor;
  tipo;

  constructor(modelo, ano, valor, tipo) {
    this.modelo = modelo;
    this.ano = ano;
    this.valor = valor;
    this.tipo = tipo;
  }

  valorIpva() {
    if (this.ano < 2000) {
      return 0;
    }
    if (
      this.tipo.toUpperCase() === "MOTOCICLETA" ||
      this.tipo.toUpperCase() === "UTILITARIO"
    ) {
      return this.valor * 0.02;
    } else {
      return this.valor * 0.04;
    }
  }
}

const itor = new Proprietario("Itor");

const xr300 = new Veiculo("XR300", 2019, 27000, "motocicleta");
const strada = new Veiculo("Strada", 2020, 69000, "utilitario");
const hb20 = new Veiculo("HB20", 2018, 52000, "passeio");
const fusca = new Veiculo("Fusca", 1997, 7000, "passeio");

itor.adicionarVeiculos(xr300);
itor.adicionarVeiculos(strada);
itor.adicionarVeiculos(hb20);
itor.adicionarVeiculos(fusca);

// console.log({ xr300, strada, hb20, fusca });
// console.log(itor.veiculos);

console.log("Valor Total IPVA de " + itor.nome + ": R$" + itor.calcularIpva());
