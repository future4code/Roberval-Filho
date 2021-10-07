import React, { useState } from "react"
import { HomePage } from "./components/HomePage"
import { MatchesPage } from "./components/MatchesPage"


const App = () => {

  const [telaAtual, setTelaAtual] = useState("Home")
  
  
  //state = {
    //telaAtual: "Home"
//};

const escolherTela = () => {
    switch (telaAtual){
    case "Home":
        return <HomePage />
    case "Matches":
        return <MatchesPage />
    default: 
        return <HomePage />
    }
}

const mudaTela = (nomeTela) => {
    setTelaAtual(nomeTela);
}    

  return (
    <div >
      <button onClick= {() => mudaTela("Matches")}>Ir para Matches</button>
      <button onClick= {() => mudaTela("Home")}>Ir Para Home</button>
      <button>Limpar Matches</button>
      {escolherTela()}
    </div>
  );
}

export default App
