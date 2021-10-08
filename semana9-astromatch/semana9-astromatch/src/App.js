import axios from "axios"
import React, { useState } from "react"
import { HomePage } from "./components/HomePage"
import { MatchesPage } from "./components/MatchesPage"


const App = () => {
  const [telaAtual, setTelaAtual] = useState("Home")
  
  
  
const escolherTela = () => {
    switch (telaAtual){
    case "Home":
        return <><button onClick= {() => mudaTela("Matches")}>Ir para Matches</button><HomePage /></>
    case "Matches":
        return <><button onClick= {() => mudaTela("Home")}>Ir Para Home</button><MatchesPage /></>
    default: 
        return <><button onClick= {() => mudaTela("Matches")}>Ir para Matches</button><HomePage /></>
    }
}
const mudaTela = (nomeTela) => {
  setTelaAtual(nomeTela);
}    

const clearMatches = ()  => {
axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberval-dionisio-maryam/clear')
.then((res) => {
  alert("Limpeza realizada com sucesso!")
}) 
.catch((err) => {
  console.log(err.response)
})
}

return (
  <div >
    <button onClick={clearMatches}>Limpar Matches</button>
    {escolherTela()}
  </div>
);
}
export default App