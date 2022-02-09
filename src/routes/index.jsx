import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AgregarCategoriaInsumo from "../pages/CategoriaInsumo/Agregar";
import EditarCategoriaInsumo from "../pages/CategoriaInsumo/Editar";
import CategoriaInsumo from "../pages/CategoriaInsumo";
import TipoRaza from "../pages/TipoRaza";
import AgregarTipoRaza from "../pages/TipoRaza/Agregar";
import EditarTipoRaza from "../pages/TipoRaza/Editar";
import TipoMascota from "../pages/TipoMascota";
import ListMascota from "../pages/Mascota";
import AgregarMascota from "../pages/Mascota/Agregar";
import EditarMascota from "../pages/Mascota/Editar";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="create-account"
            index
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
        </Route>

        <Route
          index
          path="/list-CategoriaInsumo"
          element={
            <PrivateRoute>
              <CategoriaInsumo />
            </PrivateRoute>
          }
        />



        <Route
          index
          path="/list-tipo-raza"
          element={
            <PrivateRoute>
              <TipoRaza />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/list-tipo-mascota"
          element={
            <PrivateRoute>
              <TipoMascota />
            </PrivateRoute>
          }
        />

        {/* mascotas */}
<Route
          index
          path="/list-mascotas"
          element={
            <PrivateRoute>
              <ListMascota />
            </PrivateRoute>
          }
        />
                <Route
          index
          path="/crear-mascota"
          element={
            <PrivateRoute>
              <AgregarMascota />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/mascota/edit/:id"
          element={
            <PrivateRoute>
              <EditarMascota />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
