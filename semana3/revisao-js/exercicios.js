// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}
console.log(retornaTamanhoArray)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
console.log(retornaArrayInvertido)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 return array.sort((a, b) => a - b);
     
 
}
console.log(retornaArrayOrdenado)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
 return array.filter((numerosP) => {
    return numerosP % 2 === 0
 })

}
console.log(retornaNumerosPares)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let elevadoAoQuadrado = [];
 for (let i = 0; i< array.length;i++){
     if(array[i] % 2 === 0){
         elevadoAoQuadrado.push(array[i] ** 2)
     }
 }
 return elevadoAoQuadrado
}
console.log(retornaNumerosParesElevadosADois)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNum = 0
  for (let i = 0; i < array.length; i++){
      if(array[i] > maiorNum){
          maiorNum = array[i]
      }
  }
  return maiorNum
}
console.log(retornaMaiorNumero)

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const [menor, maior] = retornaArrayOrdenado([num1, num2])

    return {
       maiorNumero: maior,
       maiorDivisivelPorMenor: maior % menor === 0,
       diferenca: maior - menor
    }
 

}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    const resultado = []

    for(let i=0; i<n; i++){
        resultado[i] = 2 * i
    }
    return resultado
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoA === ladoC){
    return `Equilátero`
}   else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC ){
    return `Escaleno`

}   else {
    return `Isósceles`
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = filme.atores.join(", "); // deram uma dica para usar o join nesse exercicio

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`;
}
console.log(retornaChamadaDeFilme)

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}