import React from "react";
import Toast from "react-bootstrap/Toast";

export default function Contribuinte({ contribuinte, index }) {
  const { nome, cpf, dependentes, rendaBruta } = contribuinte;

  return (
    <Toast>
      <Toast.Header closeButton={false}>
        <strong className="mr-auto">Contribuinte {index}</strong>
      </Toast.Header>
      <Toast.Body>
        Cpf: {cpf} | Nome: {nome} | Dependentes: {dependentes} | Renda:
        {rendaBruta}
      </Toast.Body>
    </Toast>
  );
}
