class Usuario {
  nome;
  viagens = [];

  constructor(nome) {
    this.nome = nome;
    this.viagens = [];
  }

  adicionarViagem(viagem) {
    this.viagens.push(viagem);
  }

  totalCashback() {
    let cashbackTotal = 0;

    for (let i = 0; i < this.viagens.length; i++) {
      const element = this.viagens[i];
      cashbackTotal += element.calcularCashback();
    }

    return cashbackTotal;
  }

  totalCashbackPorTipo(tipo) {
    let cashbackTotal = 0;

    for (let i = 0; i < this.viagens.length; i++) {
      const element = this.viagens[i];
      if (element.tipo == tipo) {
        cashbackTotal += element.calcularCashback();
      }
    }

    return cashbackTotal;
  }

  ordenarCashback() {
    const cashbackOrdenado = [];
    for (let i = 0; i < this.viagens.length; i++) {
      const element1 = this.viagens[i];
      for (let j = i + 1; j < this.viagens.length; j++) {
        const element2 = this.viagens[j];
        if (element1.calcularCashback() > element2.calcularCashback()) {
          let a = cashbackOrdenado[i];
          cashbackOrdenado[i] = cashbackOrdenado[j];
          cashbackOrdenado[j] = a;
        }
      }
    }
    return cashbackOrdenado;
  }
}

class Viagem {
  tipo;
  valor;
  usuario;
  qtdePassagens;

  constructor(tipo, valor, usuario, qtdePassagens) {
    this.tipo = tipo;
    this.valor = valor;
    this.usuario = usuario;
    this.qtdePassagens = qtdePassagens;
  }

  calcularCashback() {
    let valorCashback;
    let valorViagem = this.valor * this.qtdePassagens;

    if (this.tipo.toUpperCase() === "PASSEIO") {
      if (valorViagem <= 2000) {
        valorCashback = valorViagem * 0.02;
      } else if (valorViagem > 2000 && valorViagem <= 5000) {
        valorCashback = valorViagem * 0.04;
      } else if (valorViagem > 5000 && valorViagem <= 10000) {
        valorCashback = valorViagem * 0.08;
      } else {
        valorCashback = valorViagem * 0.1;
      }
      return valorCashback;
    }

    if (this.tipo.toUpperCase() === "EMPRESARIAL") {
      if (valorViagem <= 5000) {
        valorCashback = valorViagem * 0.01;
      } else if (valorViagem > 5000 && valorViagem <= 15000) {
        valorCashback = valorViagem * 0.04;
      } else {
        valorCashback = valorViagem * 0.1;
      }

      if (valorViagem > 30000 && this.qtdePassagens > 1) {
        valorCashback += 500;
      }
      return valorCashback;
    }
  }
}

const itor = new Usuario("Itor");

const viagem1 = new Viagem("Passeio", 3800, itor, 2);
const viagem2 = new Viagem("Passeio", 700, itor, 3);
const viagem3 = new Viagem("Empresarial", 14900, itor, 2);
const viagem4 = new Viagem("Passeio", 499, itor, 2);
const viagem5 = new Viagem("Empresarial", 3400, itor, 4);
const viagem6 = new Viagem("Passeio", 12500, itor, 1);
const viagem7 = new Viagem("Empresarial", 10200, itor, 3);

itor.adicionarViagem(viagem1);
itor.adicionarViagem(viagem2);
itor.adicionarViagem(viagem3);
itor.adicionarViagem(viagem4);
itor.adicionarViagem(viagem5);
itor.adicionarViagem(viagem6);
itor.adicionarViagem(viagem7);

console.log("total cashback itor: " + itor.totalCashback());
console.log("total cashback passeio: " + itor.totalCashbackPorTipo("Passeio"));
console.log(
  "total cashback empresarial: " + itor.totalCashbackPorTipo("Empresarial")
);
console.log(itor.ordenarCashback());
