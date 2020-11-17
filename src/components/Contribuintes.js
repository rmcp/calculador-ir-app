import React from "react";
import Contribuinte from "./Contribuinte";
import css from "./contribuinte.module.css";
import { Table } from "react-bootstrap";

export default function Contribuintes({ contribuintes }) {
  return (
    <div className={css.flexRow}>
      {contribuintes.length === 0 ? (
        <div>
          <h2>Nenhum contribuinte adicionado</h2>
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Cpf</th>
              <th>Renda</th>
              <th>Dependentes</th>
            </tr>
          </thead>
          <tbody>
            {contribuintes.map((elem, index) => {
              return (
                <tr>
                  <td>#</td>
                  <td>{elem.nome}</td>
                  <td>{elem.cpf}</td>
                  <td>{elem.rendaBruta}</td>
                  <td>{elem.dependentes}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}
