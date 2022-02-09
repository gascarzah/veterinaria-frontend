import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import { authReducer } from '../reducer/authReducer';
import { CategoriaInsumoReducer } from '../reducers/CategoriaInsumoReducer';
import { MascotaReducer } from '../reducers/MascotaReducer';
import { TipoMascotaReducer } from '../reducers/TipoMascotaReducer';
import { TipoRazaReducer } from '../reducers/TipoRazaReducer';


const reducers = combineReducers({
//   auth: authReducer,
  categoriaInsumos: CategoriaInsumoReducer,
  tiposRaza: TipoRazaReducer,
  tiposMascota: TipoMascotaReducer,
  mascotaReducer: MascotaReducer
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
