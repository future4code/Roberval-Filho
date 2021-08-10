//Exercícios de interpretação de código
// 1- Primeiro imprime 10 depois 10,5.
// 2- 10,10,10.
// 3- A primeira variavel chamaria de horasDiarias e a segunda valorDaDiaria

//Exercícios de escrita de código
// 1.
let nome
let idade
console.log(typeof nome,idade) // imprimiu dois undefined porque não dei um valor a váriavel ainda mas que posso dar em algum momento do código, undefined significa indefinido.
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome,idade)//imprimiu como se fosse duas strings porque o prompt só imprime o valor que foi dado a ela em forma de string.
console.log("Olá", nome, "voce tem", idade, "anos")


// 2.
let sol = prompt("hoje está sol?")
 
 console.log("Hoje está sol?", "-",sol)

 let olimpiadas = prompt("hoje tem olimpiadas?")

 console.log("Hoje tem olimpiadas? - ", olimpiadas)

let dia = prompt("Hoje é segunda-feira?")
 console.log("hoje é segunda-feira? -", dia)
 

 // 3.
 let a = 10
 let b = 25
 let c

 c = b

console.log("O novo valor de a é:",c)
console.log("O novo valor de b é:",a)