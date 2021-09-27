import React from "react";
import styled from "styled-components";
import axios from "axios";



export default class TelaRegistro extends React.Component{

    render() {
        return(
            <div>
                <button >Ir para a página de lista</button>
                <div>
                    <label>Nome</label>
                        <input
                            value= {this.props.userName}
                            onChange= {this.props.onChangeInputNovoUserName}
                        />
                    <label>E-mail</label>
                        <input
                            value= {this.props.userEmail}
                            onChange= {this.props.onChangeInputNovoUserEmail}
                        />
                    <button onClick={() => this.props.createUser}>Salvar</button>
                </div>
            </div>
        );
    }
}

