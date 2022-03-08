import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Empleado from "../pages/Empleado";
import AgregarEmpleado from "../pages/Empleado/Agregar";
import EditarEmpleado from "../pages/Empleado/Editar";

import Animal from "../pages/Animal";

import EditarAnimal from "../pages/Animal/Editar";
import AgregarAnimal from "../pages/Animal/Agregar";

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
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          index
          path="/list-animal"
          element={
            <PrivateRoute>
              <Animal />
            </PrivateRoute>
          }
        />
        <Route
          index
          path="/crear-animal"
          element={
            <PrivateRoute>
              <AgregarAnimal />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/animal/edit/:id"
          element={
            <PrivateRoute>
              <EditarAnimal />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/list-empleado"
          element={
            <PrivateRoute>
              <Empleado />
            </PrivateRoute>
          }
        />
        <Route
          index
          path="/crear-empleado"
          element={
            <PrivateRoute>
              <AgregarEmpleado />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/empleado/edit/:id"
          element={
            <PrivateRoute>
              <EditarEmpleado />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
