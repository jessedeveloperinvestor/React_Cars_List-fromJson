import React from "react";
import "./App.css";
import { cars } from "./data";

export const Cars = () => {
  return (
    <>
      <h1 className="cars-container">Lista de Veículos</h1>
      <div className="cars-container">
        {cars.map((data, key) => {
          return (
            <div key={key}>
              {data.marca_nome +
                ", " +
                data.nome_modelo +
                ", " +
                data.id +
                ", " +
                data.ano +
                ", " +
                data.combustivel +
                ", " +
                data.num_portas +
                " portas, " +
                data.valor_fipe +
                " mil reais, " +
                data.cor +
                ", " +
                data.timestamp_cadastro
            }
            </div>
          );
        })}
      </div>
      <br></br>

      <div className="cars-container">
        {cars.map((data, key) => {
          return (
            <div key={key}>
              {'ID Marca: '+data.marca_nome +
                " - " +
                data.marca_id
            }
            </div>
          );
        })}
      </div>
    </>
  );
};