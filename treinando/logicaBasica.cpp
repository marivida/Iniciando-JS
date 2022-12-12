#include <stdio.h>

int main()
{
  /*Desenvolva um sistema que calcule o quanto um motorista vai gastar em sua viagem, o usuario deve informar quantos KM o carro faz com 1 litro, deve informar quantos KM tem a viagem e qual o valor do combustivel, dados entras entrada deve calcular e retornar o valor de custo.*/

  float kmPorLitro, kmPercurso, valorCombustivel, combustivelTotal, valorViagem;
  printf("Digite quantos KM seu carro faz por litro: ");
  scanf("%f%*c", &kmPorLitro);
  printf("Digite quanto KM tem o percurso: ");
  scanf("%f%*c", &kmPercurso);
  printf("Digite o valor atual do combustivel: ");
  scanf("%f%*c", &valorCombustivel);

  combustivelTotal = kmPercurso / kmPorLitro;
  valorViagem = combustivelTotal * valorCombustivel;

  printf("Custo da viagem e %3.2f", valorViagem);
}