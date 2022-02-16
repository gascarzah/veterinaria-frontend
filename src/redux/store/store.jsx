import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ClienteReducer } from '../reducers/ClienteReducer';
import { EmpleadoReducer } from '../reducers/EmpleadoReducer';
import { MaestraReducer } from '../reducers/MaestraReducer';

// import { authReducer } from '../reducer/authReducer';
// import { CategoriaInsumoReducer } from '../reducers/CategoriaInsumoReducer';
import { MascotaReducer } from '../reducers/MascotaReducer';
import { ServicioReducer } from '../reducers/ServicioReducer';
import { TipoMascotaReducer } from '../reducers/TipoMascotaReducer';
import { TipoRazaReducer } from '../reducers/TipoRazaReducer';
import { VentaReducer } from '../reducers/VentaReducer';


const reducers = combineReducers({
//   auth: authReducer,
  // categoriaInsumos: CategoriaInsumoReducer,
  maestraReducer: MaestraReducer,
  tiposRaza: TipoRazaReducer,
  tiposMascota: TipoMascotaReducer,
  mascotaReducer: MascotaReducer,
  servicioReducer: ServicioReducer,
  empleadoReducer: EmpleadoReducer,
  clienteReducer: ClienteReducer,
  ventaReducer: VentaReducer
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
