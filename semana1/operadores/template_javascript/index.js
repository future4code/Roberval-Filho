/*exercicios de interpretação de código
1. 
imprimirá primeiro a. false; depois b. false; depois c. true; e depois d. "boolean"
2.
O problema é que ele vai declarar o valor das variaveis primeironumero e segundoNumero atraves do prompt, e o prompt só declara valores na forma de string. Eu acredito que irá imprimir 'primeiro numero colocado pelo prompt' 'segundo numero colocado pelo prompt' 
sem realizar a soma entre eles.
3.
Ele deveria transformar a string para number, escrevendo da seguinte forma: let primeiroNumero = number(prompt('Digite um numero!')) let segundoNumero = number(prompt('Digite outro numero!'))


Exercicios de escrita de código
1.*/

let idade = number(prompt("Qual a sua idade? "))
let idadeBf = number(prompt("Qual a idade do seu melhor amigo ou amiga?"))

console.log("Sua idade é maior que a do seu melhor amigo(a)", idade > idadeBf )
console.log(idade - idadeBf)

//2.
let par = number(prompt("insira um numero par: ")) //a.
console.log(par % 2) //b. / c. todos os numeros pares tem o resto 0.
// se colocar um numero ímpar retorna um numero diferente de 0, esse numero é o resto da divisão.

//3.
let idadeUsuario = number(prompt("Qual a sua idade em anos? "))
console.log(idadeUsuario * 12)
console.log(idadeusuario * 365)
console.log(idadeUsuario * 8760)

//4.
let numeroUm = number(prompt("insira um numero "))
let numeroDois = number(prompt("insira outro numero "))

console.log("O primeiro numero é maior que o segundo? ", numeroUm > numeroDois)
console.log("o primeiro numero é igual o segundo? ", numeroUm === numeroDois)
console.log("O primeiro numero é divisivel pelo segundo? ", numeroUm % numeroDois === 0)
console.log("o segundo numero é divisivel pelo primeiro? ", numeroDois % numeroUm === 0)