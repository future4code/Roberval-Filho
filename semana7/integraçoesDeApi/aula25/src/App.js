import React from 'react';
import axios from 'axios';
import TelaLista from './components/TelaLista';
import TelaRegistro from './components/TelaRegistro';

const headers = {
  headers: {
    Authorization: "roberval-dionisio-maryam"
  }
};

export default class App extends React.Component{

  state = {
    usuarios: [],
    userName: "",
    userEmail: "",
  };

  componentDidMount() {
    this.getAllUsers();
  }
  onChangeInputNovoUserName = (e) => {
    this.setState({ userName: e.target.value});
  };
  onChangeInputNovoUserEmail = (e) => {
    this.setState({ userEmail: e.target.value});
  };
  
  createUser = () => {
    const url = 
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.userName,
      email: this.state.userEmail,
    };

    axios
    .post(url, body, headers)
    .then((res) =>{
      this.setState({ userName: "", userEmail: ""});
      this.getAllUsers();
    })
    .catch((err) => {
      alert(err.response.data.message)
    });
  };

  getAllUsers = () => {
    const url = 
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios.get(url, headers)
    .then((res) => {
      console.log({ usuarios: res.data})
      this.setState({ usuarios: res.data})
    })
    .catch((err) => {
      console.log(err.response);
    });
  };
  
  render(){
    return (
      <div>
        <TelaRegistro
        userName= {this.state.userName}
        userEmail= {this.state.userEmail}
        onChangeInputNovoUserEmail= {this.onChangeInputNovoUserEmail}
        onChangeInputNovoUserName= {this.onChangeInputNovoUserName}
        usuarios= {this.state.usuarios}
        createUser= {this.createUser}
        />
        <TelaLista
        userName= {this.state.userName}
        userEmail= {this.state.userEmail}
        onChangeInputNovoUserEmail= {this.onChangeInputNovoUserEmail}
        onChangeInputNovoUserName= {this.onChangeInputNovoUserName}
        usuarios= {this.state.usuarios}
        createUser= {this.createUser}
        />
      </div>
    );
  }
}
  



