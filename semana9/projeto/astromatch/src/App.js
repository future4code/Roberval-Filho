import React from 'react'
import HomePage from "./components/HomePage"
import MatchesPage from "./components/MatchesPage"

export default class App extends React.Component {
  
  state = {
    telaAtual: "Home"
};

escolherTela = () => {
    switch (this.state.telaAtual){
    case "Home":
        return <HomePage />
    case "Matches":
        return <MatchesPage />
    default: 
        return <HomePage />
    }
}

mudaTela = (nomeTela) => {
    this.setState({telaAtual: nomeTela});
}    

  render() {
    return (
    <div>
      <button onClick= {() => this.mudaTela("Matches")}>Ir para Matches</button>
      <button onClick= {() => this.mudaTela("Home")}>Ir Para Home</button>
      <button>Limpar Matches</button>
      {this.escolherTela()}
    </div>

  )
};
  
}


