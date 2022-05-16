import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  constructor() {
    super();

    this.backHomePage = this.backHomePage.bind(this);
  }

  backHomePage() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    // Recupere as informações do seu estado criado no Redux
    const { Nome, Email, Cpf, Endereco,
      Cidade, estado, Curriculo, Cargo, Descricao } = this.props;
    return (
      <div>
        <div>
          <header>
            <h2>Dados enviados</h2>
          </header>
        </div>
        <div className="div-dados-enviados">
          <div className="dados-enviados">
            <div>
              <strong>Nome: </strong>
              {Nome}
            </div>
            <div>
              <strong>Email: </strong>
              {Email}
            </div>
            <div>
              <strong>CPF: </strong>
              {Cpf}
            </div>
            <div>
              <strong>Endereço: </strong>
              {Endereco}
            </div>
            <div>
              <strong>Cidade: </strong>
              {Cidade}
            </div>
            <div>
              <strong>Estado: </strong>
              {estado}
            </div>
            <div>
              <strong>Currículo: </strong>
              {Curriculo}
            </div>
            <div>
              <strong>Cargo: </strong>
              {Cargo}
            </div>
            <div className="descricao">
              <strong>Descrição do Cargo: </strong>
              {Descricao}
            </div>
            <button
              type="button"
              onClick={ this.backHomePage }
            >
              Voltar a tela Inicial
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Nome: state.Nome,
  Email: state.Email,
  Cpf: state.Cpf,
  Endereco: state.Endereco,
  Cidade: state.Cidade,
  estado: state.estado,
  Curriculo: state.Curriculo,
  Cargo: state.Cargo,
  Descricao: state.Descricao,
});

export default connect(mapStateToProps)(FormDataDisplay);
