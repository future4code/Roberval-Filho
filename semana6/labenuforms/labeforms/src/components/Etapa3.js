import React from "react";

class Etapa3 extends React.Component {
    render(){
        return(
            <div className="App">
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </div>
        );
    }
}

export default Etapa3;