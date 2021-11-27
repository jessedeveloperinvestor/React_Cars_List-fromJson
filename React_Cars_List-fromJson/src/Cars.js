import React from "react";
import "./App.css";
import { cars } from "./data";

export const Cars = () => {
  return (
    <>
      <h1 className="cars-container">Lista de Veículos</h1>
      <div className="stock-container">
        {cars.map((data, key) => {
          return (
            <div key={key}>
              {data.marca_nome +
                ", " +
                data.nome_modelo +
                ", " +
                data.ano +
                ", " +
                data.combustivel +
                ", " +
                data.num_portas +
                ", " +
                data.valor_fipe +
                ", " +
                data.cor +
                ", " +
                data.timestamp_cadastro
            }
            </div>
          );
        })}
      </div>
    </>
  );
};