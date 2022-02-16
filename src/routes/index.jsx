import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import CategoriaInsumo from "../pages/CategoriaInsumo";
import TipoRaza from "../pages/TipoRaza";
import TipoMascota from "../pages/TipoMascota";
import ListMascota from "../pages/Mascota";
import AgregarMascota from "../pages/Mascota/Agregar";
import EditarMascota from "../pages/Mascota/Editar";
import ListaServicio from "../pages/Servicio";
import AgregarServicio from "../pages/Servicio/Agregar";
import EditarServicio from "../pages/Servicio/Editar";
import TablaMaestra from "../components/Maestra/Tabla";
import AgregarMaestra from "../pages/Maestra/Agregar";
import EditarMaestra from "../pages/Maestra/Editar";

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


      {/* servicios */}
      <Route
          index
          path="/list-servicios"
          element={
            <PrivateRoute>
              <ListaServicio />
            </PrivateRoute>
          }
        />
                <Route
          index
          path="/crear-servicio"
          element={
            <PrivateRoute>
              <AgregarServicio />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/servicio/edit/:id"
          element={
            <PrivateRoute>
              <EditarServicio />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
