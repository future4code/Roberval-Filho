/*Exercicios de interpretação do código
1. O código está fazendo com que leia a variavel valor que foi declarada 0, e atraves de um loop vai somando os valores de 0 até 5, isso acontece 
atraves do loop contido no for(for(let i = 0; i < 5; i++) {
  valor += i)
  O console retornará 10.

2.  a)Será impresso 19 21 23 25 27 30
    b) Não porque o for of acessa todos os valores do array, e a variavel no for acessa os elementos do array e não o índice.

3. Será impresso *
                 **  
                 ***
                 ****
                 */

// Exercicios de escrita de código
//  1.

const numeroDeBichinhos = number(prompt("Quantos bichinhos de estimação você tem?"))
let nomeBichinhos = []
    if(bichinhosEstimacao === 0){
        console.log("Que pena! Você pode adotar um pet!")
    } else{
    for(let i=1; i <= numeroDeBichinhos; i++){
        const bichinhos = prompt("Escreva o nome do seu bicinho")
    nomeBichinhos = nomeBichinhos.push(bichinhos)
    }
    
    }      
    console.log(nomeBichinhos)

//  2.
const arrayOriginal = []

function imprimir(array){
    console.log(arrayOriginal[])
}
function imprimirDividosPorDez(array){
    console.log(arrayOriginal[]/10)
}
function pares(array){
    if(arrayOriginal % 2 === 0){
        (arrayOriginal)
    }
    
}