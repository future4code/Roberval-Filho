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
let cartasUsuario = []
let cartasComputador = []

/*confirm(
	"Suas cartas são A♥️ J♣️. A carta revelada do computador é 4♣️." +
	"\n"+  // \n faz pular a linha
	"Deseja comprar mais uma carta?"
)



Este confirm resulta na mensagem:

	Suas cartas são A♥️ J♣️. A carta revelada do computador é 4♣️.
	Deseja comprar mais uma carta?

*/

   


if(confirm("Quer iniciar uma nova rodada?")) {
      let cartaUsuario1 = comprarCarta()
      let cartaComputador1 = comprarCarta()     //fazer um loop para ir adicionando os valores no array cartasUsuario e cartasComputador
      let cartaUsuario2 = comprarCarta()
      let cartaComputador2 = comprarCarta()

      cartasUsuario.push(cartaUsuario1)
      
      if(cartaUsuario1.texto === "A"){
         
      }

      let pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor   
      let pontosComputador = cartaComputador1.valor + cartaComputador2.valor   

       console.log( `Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} pontuação ${pontosUsuario}`)
       console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} pontuação ${pontosComputador}`)   // mensagem na tela
        
      if(pontosUsuario === pontosComputador){  
         console.log("Empate!")
      }  else if(pontosUsuario > pontosComputador){
         console.log("Você ganhou!")
      }  else if(pontosComputador > pontosUsuario){
         console.log("O computador ganhou")
      }




   } else {
      console.log("O jogo acabou")
   }  

