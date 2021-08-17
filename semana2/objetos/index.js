/* Exercicios de interpretação de código

1. a) Será impresso no console:
Matheus Nachtergaele
Denise Fraga
canal: "Canal Brasil", horario: "19h"

2.  a)
idade: 3
nome: "Juca"
raca: "SRD"

idade: 3
nome: "Juca"
raca: "SRD"
nome: "Juba"

idade: 3
nome: "Juca"
raca: "SRD"
nome: "Juba"
nome: "Jubo"

b) Os três pontinhos servem como uma continuação de um objeto já criado anteriormente.

3.  a)
False*/

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
