import {

    Button,
  
    Container,
    CssBaseline,
    TextField,
  
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useDispatch } from "react-redux";
  import {actualizarServicio, crearServicio, 
  } from "../../../redux/actions/Servicio";
  import { Formik } from "formik";
  import * as Yup from "yup";
  import { useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  
  const useStyles = {
    paper: {
      marginTop: 1,
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
  
  
  const validationSchema = Yup.object({
    nombre: Yup.string().required("El titulo es Obligatorio"),

  });
  
  
  
  const ServicioForm = ({ editar = false, servicio }) => {
  
    // console.log('servicio form')
    // console.log(servicio)
    const [initialValues, setInitialValues] = useState(servicio)
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
  
  
    const ejecutar = (valores) => {

  
      if (editar) {
        dispatch(actualizarServicio({ ...valores }));
      } else {
        dispatch(crearServicio({ ...valores }));
      }
  
      setTimeout(() => {
        dispatch({
          type: 'CLEAR_MESSAGE_NOTIFICATION',
        });
        // resetForm();
        // if (errors) {
          navigate('/list-servicios');
        // }
      }, 1500);
      
    };
  
  
    
  
    return (
      <Container component="main" maxWidth="xs" style={useStyles.paper}>
        <CssBaseline />
        {/* {console.log('servicios')}
        {console.log(servicios)}
        {console.log('razas')}
        {console.log(razas)} */}
  
        
        <div>
          
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(valores) => {
              
              ejecutar(valores);
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
          {console.log(props)}
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  name="nombre"
                  autoComplete="nombre"
                  autoFocus
                  value={props.values.nombre}
                  onChange={props.handleChange}
                  error={props.touched.nombre && Boolean(props.errors.nombre)}
                  helperText={props.touched.nombre && props.errors.nombre}
                />
  
 
  
      
  
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  // endIcon={
                  //   loading ?(
                  //     <CircularProgress size={20} />
                  //   ): null
                  // }
                >
                  {editar ? "Editar" : "Crear"}
                </Button>
              </form>
            )}
          </Formik>
          
        </div>
      
      </Container>
    );
  };
  
  export default ServicioForm;
  