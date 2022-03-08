import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "../reducers/AuthReducer";

import { MaestraReducer } from "../reducers/MaestraReducer";
import { MascotaReducer } from "../reducers/MascotaReducer";
import { MenuReducer } from "../reducers/MenuReducer";
import { PersonaReducer } from "../reducers/PersonaReducer";
import { UsuarioReducer } from "../reducers/UsuarioReducer";

import { VentaReducer } from "../reducers/VentaReducer";


const reducers = combineReducers({
    authReducer: AuthReducer,
  
  maestraReducer: MaestraReducer,
  mascotaReducer: MascotaReducer,
  menuReducer: MenuReducer,
  personaReducer: PersonaReducer,
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
