import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Resultado = ({ novosCalculos }) => {
  const history = useHistory();

  console.log(history);

  // useEffect(() => {
  //   console.log("novosCalculos: ");
  //   console.log(novosCalculos);
  // }, []);

  return (
    <div className="list row">
      <div className="col-md-12">
        <h4>
          Cálculo realizado com sucesso{" "}
          <Link to={"/add/"} className="badge badge-green">
            Novo
          </Link>
        </h4>

        <ul className="list-group">
          {novosCalculos &&
            novosCalculos.map((calculo, index) => (
              <li className={"list-group-item"} key={index}>
                Nome: {calculo.nome} - Imposto Devido:{" "}
                {calculo.impostoCalculado}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Resultado;
