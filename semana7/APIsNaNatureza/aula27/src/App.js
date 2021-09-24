import React from "react";
import styled from "styled-components";
import axios from "axios";

const Bored = styled.div`
background-image: url("https://i0.wp.com/dariusforoux.com/wp-content/uploads/2017/05/IMG_0272.png?fit=665%2C499&ssl=1");
background-size: 100%;
color: blue;
display: flex;
flex-direction: column;
align-items: center;
font-size: 30px;
border: 2px solid black;
font-weight: bold;
`

export default class App extends React.Component {

  state = {
    atividade: {}
  }

  getActivity = () => {
    axios.get("http://www.boredapi.com/api/activity/")
    .then((res) => {
      console.log(res.data);
      this.setState({atividade: res.data})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
    <Bored>
      <h1>ANTITÉDIO</h1>
      <button onClick={this.getActivity}>Hora da diversão!</button>
      <h2>Atividade: {this.state.atividade.activity}</h2>
      <p>Detalhes: </p>
      <p>Tipo: {this.state.atividade.type}</p>
      <p>Participantes: {this.state.atividade.participants}</p>
      <p>Preço: {this.state.atividade.price}</p>
    </Bored>
  )};
}


