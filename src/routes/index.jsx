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

        {/* <Route
          index
          path="/crear-categoria-insumo"
          element={
            <PrivateRoute>
              <AgregarCategoriaInsumo />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/categoriaInsumo/edit/:id"
          element={
            <PrivateRoute>
              <EditarCategoriaInsumo />
            </PrivateRoute>
          }
        /> */}

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
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
