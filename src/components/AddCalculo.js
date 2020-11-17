import React, { Fragment, useState } from "react";
import CalculoDataService from "../services/CalculoService";
import FormContribuinte from "./FormContribuinte";
import Contribuintes from "./Contribuintes";
import CalculosList from "./CalculosList";
import AlertDismissible from "./AlertDismissible";
import { Redirect } from "react-router-dom";

const AddCalculo = () => {
  const [contribuintes, setContribuintes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [salarioMinimo, setSalarioMinimo] = useState(1045);
  const [mensagem, setMensagem] = useState("");
  const [novosCalculos, setNovosCalculos] = useState([]);

  let novosCalculos2 = [];

  const handleInputChange = (event) => {
    setSalarioMinimo(event.target.value);
  };

  const saveCalculo = (e) => {
    e.preventDefault();

    if (contribuintes.length <= 0) {
      setMensagem("Adicione pelo menos um contribuinte.");
      return;
    } else setMensagem("");

    const calculosAFazer = contribuintes.map((obj) => ({
      ...obj,
      salarioMinimo,
    }));

    CalculoDataService.calcular(calculosAFazer)
      .then((response) => {
        setSubmitted(true);
        setNovosCalculos(response.data);
        novosCalculos2 = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        setMensagem(
          "Erro ao calcular o imposto devido dos contribuintes informados"
        );

        console.log(e);
      });
  };

  const newCalculo = () => {
    setContribuintes([]);
    setSubmitted(false);
    setMensagem("");
  };

  const addContribuinte = (novo) => {
    const novoContribuintes = Object.assign([], contribuintes);

    setContribuintes([...novoContribuintes, { ...novo }]);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h4>Calculo realizado com sucesso!</h4>
          {/* <button className="btn btn-success" onClick={newCalculo}>
            Novo            
          </button> */}
          {/* <Redirect
            to={{
              pathname: "/resultado",
              state: { novosCalculos: novosCalculos2 },
            }}
          ></Redirect> */}
          <CalculosList novosCalculos={novosCalculos}></CalculosList>
        </div>
      ) : (
        <Fragment>
          <FormContribuinte
            addContribuinte={addContribuinte}
          ></FormContribuinte>

          <Contribuintes contribuintes={contribuintes}></Contribuintes>

          <Fragment>
            <div>
              {mensagem ?? (
                <AlertDismissible
                  variant={"warning"}
                  mensagem={mensagem}
                  showAlert={true}
                ></AlertDismissible>
              )}
              <br></br>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="inputSalarioMinimo">Salario minimo</label>
                    <input
                      id="inputSalarioMinimo"
                      type="number"
                      value={salarioMinimo}
                      onChange={handleInputChange}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group col-md-3"></div>
                </div>
                <button onClick={saveCalculo} className="btn btn-primary">
                  Calcular Impostos Devidos
                </button>
                <span></span>
              </form>
            </div>
          </Fragment>
        </Fragment>
      )}
    </div>
  );
};

export default AddCalculo;
