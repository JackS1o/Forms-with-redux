import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { actionProfessional } from '../redux/actions/action';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      Curriculo: '',
      Cargo: '',
      Descricao: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isBtnDisabled = this.isBtnDisabled.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, this.isBtnDisabled);
  }

  handleSubmit() {
    const { history, handleUser } = this.props;
    handleUser(this.state);
    history.push('/formdisplay');
  }

  isBtnDisabled() {
    const { Curriculo, Cargo, Descricao } = this.state;
    const verifyInput = [
      Curriculo.length > 0,
      Cargo.length > 0,
      Descricao.length > 0,
    ];

    const result = verifyInput.every((input) => input === true);
    if (result) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { Curriculo, Cargo, Descricao, disabled } = this.state;
    const button = (<Button
      type="button"
      label="Enviar"
      onClick={ this.handleSubmit }
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
              <TextArea
                label="Resumo do currículo: "
                value={ Curriculo }
                name="Curriculo"
                maxLength="1000"
                onChange={ this.handleChange }
                required
              />
              <Input
                label="cargo:"
                name="Cargo"
                type="text"
                value={ Cargo }
                onChange={ this.handleChange }
                required
              />
              <TextArea
                label="Descrição do cargo: "
                name="Descricao"
                maxLength="500"
                onChange={ this.handleChange }
                value={ Descricao }
                required
              />
              {disabled ? <span style={ { color: 'red' } }>Preencha todos os campos.</span>
                : button}
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleUser: (state) => dispatch(actionProfessional(state)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
