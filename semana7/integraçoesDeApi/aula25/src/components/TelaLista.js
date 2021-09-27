import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class TelaLista extends React.Component{

    usuarios = this.props.usuarios.map((item, index, array) =>{
        return<li key= {item.id}>{item.name}</li>;
    });
    render() {
        return(
            <div>
                <button>Ir para a página de registro</button>
                <div>
                    <h2>Usuários Cadastrados: </h2>
                    {this.usuarios}
                </div>
            </div>
        );
    }
}
