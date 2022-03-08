import React from "react";
import ListaMaestra from "../../components/Maestra/Tabla";

const mantenimiento = {
  "codigo": 2,
  "nombre": 'animal'
}

const Animal = () => {

  return (
    <>
      <div>
        <h1>Animal</h1>
        <ListaMaestra   mantenimiento={mantenimiento} />
      </div>
    </>
  );
};

export default Animal;
