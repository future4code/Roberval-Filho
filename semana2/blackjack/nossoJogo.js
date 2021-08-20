/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")


   if(confirm("Quer iniciar um novo jogo?")) {
      let cartaUsuario1 = comprarCarta()
      let cartaComputador1 = comprarCarta()
      let cartaUsuario2 = comprarCarta()
      let cartaComputador2 = comprarCarta()

      let pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor    // gravando pontuação do usuario
      let pontosComputador = cartaComputador1.valor + cartaComputador2.valor   // gravando pontuação do computador

       console.log( `Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} pontuação ${pontosUsuario}`)
       console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} pontuação ${pontosComputador}`)   // mensagem na tela
        
      if(pontosUsuario === pontosComputador){  // declarando o vencedor ou o empate
         console.log("Empate!")
      }  else if(pontosUsuario > pontosComputador){
         console.log("Você ganhou!")
      }  else if(pontosComputador > pontosUsuario){
         console.log("O computador ganhou")
      }




   } else {
      console.log("O jogo acabou")
   }  