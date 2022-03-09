import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AnimalReducer } from "../reducers/Animal";
import { AuthReducer } from "../reducers/AuthReducer";
import { ClienteReducer } from "../reducers/ClienteReducer";
import { EmpleadoReducer } from "../reducers/EmpleadoReducer";

import { MaestraReducer } from "../reducers/MaestraReducer";
import { MascotaReducer } from "../reducers/MascotaReducer";
import { MenuReducer } from "../reducers/MenuReducer";
import { PersonaReducer } from "../reducers/PersonaReducer";
import { RazaReducer } from "../reducers/RazaReducer";
import { ServicioReducer } from "../reducers/ServicioReducer";
import { UsuarioReducer } from "../reducers/UsuarioReducer";

import { VentaReducer } from "../reducers/VentaReducer";


const reducers = combineReducers({
  authReducer: AuthReducer,
  animalReducer: AnimalReducer,
  clienteReducer: ClienteReducer,
  empleadoReducer: EmpleadoReducer,
  maestraReducer: MaestraReducer,
  mascotaReducer: MascotaReducer,
  menuReducer: MenuReducer,
  razaReducer: RazaReducer,
  personaReducer: PersonaReducer,
  servicioReducer: ServicioReducer,
  ventaReducer: VentaReducer,
  usuarioReducer: UsuarioReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
