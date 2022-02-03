import { AccountCircle } from '@mui/icons-material';
import { Avatar, Button, CircularProgress, Container, CssBaseline, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actualizarCategoriaInsumo, crearCategoriaInsumo } from "../../../redux/actions/CategoriaInsumo";

const initialDataForm = {

  nombre: '',
  descripcion: '',
};
const useStyles = {
    paper: {
         marginTop: 1 ,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      
    },
    avatar: {
      //   margin: theme.spacing(1),
      //   backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      //   marginTop: 1,
    },
    submit: {
        margin: 3,
    },
    circuloWhite: {
      color: "#fff",
    },
  };

const CategoriaInsumoForm = ({data, editar = false}) => {

  const [dataForm, setDataForm] = useState(initialDataForm);
  const dispatch = useDispatch()
  useEffect(() => {
  
    if(editar){
      // console.log('data')
      // console.log(data)
      setDataForm(data )
    }else{
      setDataForm({ ...dataForm})

    }

  }, [editar]);
  
const handleChange = (e) =>{
  setDataForm({ ...dataForm, [e.target.name]: e.target.value });
}

const handleSubmit = () => {
  if(editar){
    dispatch(actualizarCategoriaInsumo(dataForm))
  }else{
    dispatch(crearCategoriaInsumo(dataForm))

  }
}

    return (
        <Container component="main" maxWidth="xs" style={useStyles.paper} >
      <CssBaseline />
      <div >
         <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            autoComplete="nombre"
            autoFocus
            value={dataForm.nombre}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="descripcion"
            label="Descripcion"
            name="descripcion"
            autoComplete="descripcion"
            value={dataForm.descripcion}
            onChange={handleChange}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            endIcon= {<CircularProgress size={20}/>}
          >
            {editar ? "Editar" : "Crear"} 
          </Button>
        </form>
      </div>
    </Container>
    );
};

export default CategoriaInsumoForm;