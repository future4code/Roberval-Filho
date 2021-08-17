// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = prompt("insira o valor da altura: ")
let largura = prompt("Insira o valor da largura: ")
let area = altura * largura
return area
}
console.log(calculaAreaRetangulo)

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt("Em que ano estamos?")
let anoDeNascimento = prompt("Qual ano você nasceu?")
let idade = anoAtual - anoDeNascimento
return idade
}
console.log(idade)

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
let calc = peso/(altura*altura)
return calc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Escreva seu nome:")
let idade = prompt("Insira sua idade:")
let email = prompt("Insira o seu e-mail:")
let mensagemNaTela = "Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email
return mensagemNaTela
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let coresPreferidas = []

const cor1 = prompt("Insira sua cor favorita:")
const cor2 = prompt("Insira sua segunda cor favorita:")
const cor3 = prompt("Insira sua terceira cor favorita:")

coresPreferidas.push(cor1)
coresPreferidas.push(cor2)
coresPreferidas.push(cor3)
return coresPreferidas
}
console.log(imprimeTresCoresFavoritas)

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const maiuscula = string.toUpperCase()
return maiuscula
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}