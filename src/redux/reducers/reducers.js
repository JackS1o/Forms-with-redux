import { CHANGE_FORM, CHANGE_PROFESSIONAL } from '../actions/action';

const INITIAL_STATE = {
  Nome: '',
  Email: '',
  Cpf: '',
  Endereco: '',
  Cidade: '',
  estado: '',
  Curriculo: '',
  Cargo: '',
  Descricao: '' };

function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_FORM:
    return { ...state,
      Nome: action.Nome,
      Email: action.Email,
      Cpf: action.Cpf,
      Endereco: action.Endereco,
      Cidade: action.Cidade,
      estado: action.estado };
  case CHANGE_PROFESSIONAL:
    return { ...state,
      Curriculo: action.Curriculo,
      Cargo: action.Cargo,
      Descricao: action.Descricao,
    };
  default:
    return state;
  }
}

export default reducers;
