/* Exercicios de interpretação de código
    1.
a) Será impresso 10 e 50.
b) Não será impresso nada, pois precisa do console.log para aparecer algo no console.

    2.
a) Ela pede para o usuario inserir uma frase, depois muda todas as letras para minusculo e retorna true ou false se a frase contém a a palavra "cenoura"
b) i. eu gosto de cenoura //true
   ii. cenoura é bom pra vista //true
   iii. cenouras crescem na terra //false*/

// Exercicios de escrita de código
/*1. 
   a)*/ 
    function infos(){
    console.log("Eu sou Roberval, tenho 20 anos, moro em Terra Rica e sou estudante")
    }
// b)
function infosUsuario(nome, idade, endereco, profissao){
const mensFinal = "Eu sou " + nome + "tenho " + idade + " anos, moro em " + endereco + " e sou " + profissao
return mensFinal
}