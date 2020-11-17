import React from "react";
import Toast from "react-bootstrap/Toast";
import { formatMoney } from "../helpers/formatHelpers.js";

export default function Contribuinte({ contribuinte, index }) {
  const { nome, cpf, dependentes, rendaBruta } = contribuinte;

  return (
    <Toast>
      <Toast.Header closeButton={false}>
        <strong className="mr-auto">Contribuinte {index}</strong>
      </Toast.Header>
      <Toast.Body>
        <strong>Cpf:</strong> {cpf} | <strong>Nome:</strong> {nome} |{" "}
        <strong>Dependentes:</strong> {dependentes} | <strong>Renda:</strong>
        {formatMoney(rendaBruta)}
      </Toast.Body>
    </Toast>
  );
}
