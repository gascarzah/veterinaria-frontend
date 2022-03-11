import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import Cliente from "../pages/Cliente";
import AgregarCliente from "../pages/Cliente/Agregar";
import EditarCliente from "../pages/Cliente/Editar";
import Mascota from "../pages/Mascota";
import Raza from "../pages/Raza";
import Servicio from "../pages/Servicio";
import Venta from "../pages/Venta";
import AgregarMascota from "../pages/Mascota/Agregar";
import EditarMascota from "../pages/Mascota/Editar";
import AgregarRaza from "../pages/Raza/Agregar";
import EditarRaza from "../pages/Raza/Editar";
import AgregarServicio from "../pages/Servicio/Agregar";
import EditarServicio from "../pages/Servicio/Editar";
import AgregarVenta from "../pages/Venta/Agregar";
import EditarVenta from "../pages/Venta/Editar";

import dayjs from "dayjs";
import jwt_decode from "jwt-decode";


const Rutas = () => {
//   // console.log('en rutas')
//   // const user = JSON.parse(sessionStorage.getItem('user'))
//   // console.log(user)
// const [isLogged, setIsLogged] = useState(false)

// useEffect(() => {
//   console.log('en rutas')
//   const user = JSON.parse(sessionStorage.getItem('user'))
//   setIsLogged(user.isLogged)
// }, [])

  // useEffect(() => {
  //   const user = sessionStorage.getItem("user")
  //   ? JSON.parse(sessionStorage.getItem("user"))
  //   : null;
  //   console.log(user)   
  //   if(user){
  //     console.log('entro')
  //     const decodeRefreshToken = jwt_decode(user.refresh_token);
  //   const refreshTokenisExpired =
  //     dayjs.unix(decodeRefreshToken.exp).diff(dayjs()) < 1;
  //     if(refreshTokenisExpired){
  //       console.log('expirado')
  //       console.log(refreshTokenisExpired)
  //     setIsExpired(refreshTokenisExpired)
  //     sessionStorage.setItem("user", {access_toke: null,
  //                                   refresh_token: null,
  //                                   logged: false})
  //                                 }
  //   }
  // }, [])

  // console.log('espirado')
  // console.log(isExpired)
  
  

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
          path="/dashboard"
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
            <PrivateRoute >
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
          path="/animales/edit/:id"
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
          path="/empleados/edit/:id"
          element={
            <PrivateRoute>
              <EditarEmpleado />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/list-cliente"
          element={
            <PrivateRoute>
              <Cliente />
            </PrivateRoute>
          }
        />
        <Route
          index
          path="/crear-cliente"
          element={
            <PrivateRoute>
              <AgregarCliente />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/clientes/edit/:id"
          element={
            <PrivateRoute>
              <EditarCliente />
            </PrivateRoute>
          }
        />
        <Route
          index
          path="/list-mascota"
          element={
            <PrivateRoute>
              <Mascota />
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
          path="/mascotas/edit/:id"
          element={
            <PrivateRoute>
              <EditarMascota />
            </PrivateRoute>
          }
        />
        <Route
          index
          path="/list-raza"
          element={
            <PrivateRoute>
              <Raza />
            </PrivateRoute>
          }
        />
 <Route
          index
          path="/crear-raza"
          element={
            <PrivateRoute>
              <AgregarRaza />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/razas/edit/:id"
          element={
            <PrivateRoute>
              <EditarRaza />
            </PrivateRoute>
          }
        />
        <Route
          index
          path="/list-servicio"
          element={
            <PrivateRoute>
              <Servicio />
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
          path="/servicios/edit/:id"
          element={
            <PrivateRoute>
              <EditarServicio />
            </PrivateRoute>
          }
        />
        <Route
          index
          path="/list-venta"
          element={
            <PrivateRoute>
              <Venta />
            </PrivateRoute>
          }
        />
         <Route
          index
          path="/crear-venta"
          element={
            <PrivateRoute>
              <AgregarVenta />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/ventas/edit/:id"
          element={
            <PrivateRoute>
              <EditarVenta />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
