import "./App.css";
import React from "react";
import Message from "./components/Message/Message";

import styled from "styled-components";

const SendButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
`;

const Usuario = styled.input`
  width: 100px;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

const Mensagem = styled.input`
  flex: 1 1 0%;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

class App extends React.Component {
  state = {
    messages: [],

    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  sendMessage = () => {
    const message = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };

    const messages = [...this.state.messages, message];
    this.setState({ messages: messages });

    this.clearInputs();
  };

  onEnterSendMessage = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.sendMessage();
    }
  };

  clearInputs = () => {
    this.setState({ valorInputUsuario: "" });
    this.setState({ valorInputMensagem: "" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const messages = this.state.messages.map((msg) => {
      return <Message nome={msg.usuario} conteudo={msg.mensagem}></Message>;
    });

    return (
      <div className="container">
          <div className="chat-container">{messages}</div>
        <div className="input-container">
          <Usuario
            type="text"
            placeholder="Usuário"
            className="user"
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
          />
          <Mensagem
            type="text"
            placeholder="Mensagem"
            className="message"
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            onKeyUp={this.onEnterSendMessage}
          />
          <SendButton onClick={this.sendMessage}>Send</SendButton>
        </div>
      </div>
    );
  }
}

export default App;
