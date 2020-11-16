import React from "react";
import Contribuinte from "./Contribuinte";
import css from "./contribuinte.module.css";

export default function Contribuintes({ contribuintes }) {
  return (
    <div className={css.flexRow}>
      {contribuintes.length === 0 ? (
        <div>
          <h2>Nenhum contribuinte adicionado</h2>
        </div>
      ) : (
        contribuintes.map((elem, index) => {
          return (
            <div key={index}>
              <Contribuinte
                contribuinte={elem}
                index={index + 1}
              ></Contribuinte>
            </div>
          );
        })
      )}
    </div>
  );
}
