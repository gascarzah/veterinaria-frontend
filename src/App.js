import { Container } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import {ErrorBoundary} from 'react-error-boundary'
import Rutas from "./routes";



function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Container fixed >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store} >
          
            <Rutas />
         
        </Provider>
        </ErrorBoundary>
      </Container>
    </div>
  );
}

export default App;
