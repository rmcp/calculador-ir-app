import React, { useState } from "react";
import AlertDismissible from "./AlertDismissible";

export default function FormContribuinte({ addContribuinte }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dependentes, setDependentes] = useState(0);
  const [rendaBruta, setRendaBruta] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const onAddContribuinte = (e) => {
    let erros = "";

    if (!nome) erros = "Nome obrigatório <br />";
    if (!cpf) erros += "Cpf obrigatório <br />";
    if (dependentes < 0) erros += "Dependentes inválido <br />";
    if (rendaBruta < 0) erros += "Renda inválida <br />";

    setMensagem(erros);

    if (erros.length <= 0) {
      addContribuinte({
        nome,
        cpf,
        dependentes,
        rendaBruta,
      });
    }

    e.preventDefault();
  };

  const handleOnChangeName = (e) => {
    setNome(e.target.value);
  };

  const handleOnChangeCpf = (e) => {
    setCpf(e.target.value);
  };

  const handleOnChangeDep = (e) => {
    setDependentes(parseInt(e.target.value));
  };

  const handleOnChangeRenda = (e) => {
    setRendaBruta(parseFloat(e.target.value));
  };

  return (
    <div>
      {mensagem ?? (
        <AlertDismissible
          variant={"warning"}
          mensagem={mensagem}
          showAlert={true}
        ></AlertDismissible>
      )}
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={nome}
              name="name"
              onChange={handleOnChangeName}
              maxLength="100"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="subject">CPF</label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              required
              value={cpf}
              name="cpf"
              onChange={handleOnChangeCpf}
              maxLength="14"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="dependentes">Dependentes</label>
            <input
              type="number"
              className="form-control"
              id="dependentes"
              required
              value={dependentes}
              name="type"
              onChange={handleOnChangeDep}
              step="1"
              max="10"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="renda">Renda</label>
            <input
              type="Number"
              className="form-control"
              id="renda"
              required
              value={rendaBruta}
              name="value"
              onChange={handleOnChangeRenda}
              step="100"
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={onAddContribuinte}>
          Adicionar Contribuinte
        </button>
      </form>

      <br></br>
    </div>
  );
}
