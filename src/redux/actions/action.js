export const CHANGE_FORM = 'CHANGE_FORM';
export const CHANGE_PROFESSIONAL = 'CHANGE_PROFESSIONAL';

export const actionChangeForm = (state) => ({
  type: CHANGE_FORM,
  Nome: state.Nome,
  Email: state.Email,
  Cpf: state.Cpf,
  Endereco: state.Endereco,
  Cidade: state.Cidade,
  estado: state.estado,
});

export const actionProfessional = (state) => ({
  type: CHANGE_PROFESSIONAL,
  Curriculo: state.Curriculo,
  Cargo: state.Cargo,
  Descricao: state.Descricao,
});
