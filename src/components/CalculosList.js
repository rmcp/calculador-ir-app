import React, { useState, useEffect } from "react";
import CalculoDataService from "../services/CalculoService";
import { Link } from "react-router-dom";
import { formatMoney } from "../helpers/formatHelpers.js";

const CalculosList = ({ novosCalculos }) => {
  const [calculos, setCalculos] = useState([]);

  useEffect(() => {
    if (!!novosCalculos) {
      setCalculos(novosCalculos);
    } else {
      retrieveCalculos();
    }

    // retrieveCalculos();
  }, [novosCalculos]);

  const retrieveCalculos = () => {
    CalculoDataService.getAll()
      .then((response) => {
        setCalculos(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-12">
        <h4>
          Cálculos Realizados{" "}
          <Link to={"/add/"} className="badge badge-green">
            Novo
          </Link>
        </h4>

        <ul className="list-group">
          {calculos &&
            calculos.map((calculo, index) => (
              <li className={"list-group-item"} key={index}>
                <strong>Contribuinte: </strong> {calculo.nome} -{" "}
                <strong>Imposto Devido:</strong>{" "}
                {formatMoney(calculo.impostoCalculado)}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CalculosList;
