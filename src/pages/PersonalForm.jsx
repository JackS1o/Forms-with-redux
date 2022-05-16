import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { actionChangeForm } from '../redux/actions/action';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      Nome: '',
      Email: '',
      Cpf: '',
      Endereco: '',
      Cidade: '',
      estado: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePath = this.handlePath.bind(this);
    this.isBtnDisabled = this.isBtnDisabled.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, this.isBtnDisabled);
  }

  handlePath() {
    const { handleUser, history } = this.props;
    handleUser(this.state);
    history.push('/professionalform');
  }

  isBtnDisabled() {
    const { Nome, Email, Cpf, Endereco, Cidade } = this.state;
    const verifyInput = [
      Nome.length > 0,
      Email.length > 0,
      Cpf.length > 0,
      Endereco.length > 0,
      Cidade.length > 2,
    ];

    const result = verifyInput.every((input) => input === true);
    console.log(result);
    if (result) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { Nome, Email, Cpf, Endereco, Cidade, estado, disabled } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    const button = (<Button
      type="button"
      label="Enviar"
      onClick={ this.handlePath }
      disabled={ disabled }
    />);
    return (
      <div>
        <div>
          <header>
            <h1>Formulário Profissional</h1>
          </header>
        </div>
        <div className="div-mae-forms">
          <div className="div-personalForm">
            <fieldset className="form">
              <Input
                label="nome: "
                type="text"
                onChange={ this.handleChange }
                value={ Nome }
                name="Nome"
                required
              />
              <Input
                label="Email: "
                type="email"
                onChange={ this.handleChange }
                value={ Email }
                name="Email"
                required
              />
              <Input
                label="Cpf: "
                type="text"
                onChange={ this.handleChange }
                value={ Cpf }
                maxLength="11"
                name="Cpf"
                required
              />
              <Input
                label="Endereco: "
                type="text"
                onChange={ this.handleChange }
                value={ Endereco }
                name="Endereco"
                required
              />
              <Input
                label="Cidade: "
                type="text"
                onChange={ this.handleChange }
                name="Cidade"
                value={ Cidade }
              />
              <Select
                defaultOption="Selecione"
                onChange={ this.handleChange }
                value={ estado }
                label="Estado: "
                id="estado"
                name="estado"
                options={ states }
              />
              {disabled ? <span style={ { color: 'red' } }>Preencha todos oscampos.</span>
                : button}
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleUser: (state) => dispatch(actionChangeForm(state)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
