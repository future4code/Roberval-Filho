/* 1.
    a. undefined
    b. undefined
    c. 11
    d. 3
    e. [3,19,5,6,7,8,9,10,11,12,13]
    f. 9

   2.
    SUBI NUM ÔNIBUS EM MIRROCOS 27*/
    
    //Exercicios de escrita de código
    //1.
let nomeDoUsuario = prompt("Qual o seu nome? ")
let emailDoUsuario = prompt("Qual o seu email? ")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")

    //2.
let comidasFavoritas = ["macarrão","lasanha", "rondelli", "pizza", "carne de panela"]
console.log("macarrão","lasanha", "rondelli", "pizza", "carne de panela")

console.log("Essas são minhas comidas favoritas: ", comidasFavoritas)

let comidaUsuario = prompt("Escreva sua comida favorita:")
comidasFavoritas[1] = comidaUsuario

console.log(comidasFavoritas)

    //3.
    let listaDeTarefas = []
    let tarefas1 = prompt("diga uma tarefa precisa realizar")
    let tarefas2 = prompt("diga outra tarefa: ")
    let tarefas3 = prompt("Diga outra tarefa")

    listaDeTarefas.push(tarefas1)
    
    listaDeTarefas.push(tarefas2)

    listaDeTarefas.push(tarefas3)
