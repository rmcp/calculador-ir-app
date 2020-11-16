import React from "react";
import css from "./contribuinte.module.css";

export default function Contribuinte({ contribuinte, index }) {
  const classes = `card ${css.box} `;
  const { nome, cpf, dependentes, rendaBruta } = contribuinte;

  return (
    <div className={classes}>
      <div className="card-header">Contribuinte {index}</div>
      <div className="card-body">
        <h5 className="card-title">
          {cpf} - {nome}
        </h5>
        <span className="card-text">
          <strong>Dependentes: </strong> {dependentes}
        </span>
        <span className="card-text">
          <strong>Renda: </strong> {rendaBruta}
        </span>
      </div>
    </div>
  );
}
