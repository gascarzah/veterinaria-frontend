import React from "react";
import { AccountCircle } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Button,
  CircularProgress,
  Container,
  
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { crearUsuario } from "../../redux/actions/Usuario";
import { useNavigate } from "react-router-dom";

// const theme = createTheme();
const useStyles = makeStyles(() => ({
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
    //   margin: 3,
  },
  circuloWhite: {
    color: "#fff",
  },
}));

const initialValues = {
  correo: '',
  password: '',
  nombres: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
 
}

const validationSchema = Yup.object({
  correo: Yup.string().required("El correo es Obligatorio"),
  password: Yup.string().required("Password es Obligatoria"),
  nombres: Yup.string().required("El nombre es Obligatorio"),
  apellidoPaterno: Yup.string().required("El apellido paterno es Obligatorio"),
  apellidoMaterno: Yup.string().required("El apellido materno es Obligatorio"),

});

const CreateAccountForm = () => {

  const state = useSelector((state) => state);
  const { usuarioReducer } = state;
  const { loadingCrud, messageCrud} = usuarioReducer;

 console.log(usuarioReducer)
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const ejecutar = (valores, resetForm) => {
  //  console.log('valores')
  //  console.log(valores)
      dispatch(
        crearUsuario({ ...valores }, resetForm, navigate)
      );
  };


  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear Cuenta
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(valores,{resetForm}) => {
            ejecutar(valores, resetForm);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            
            fullWidth
            id="nombres"
            label="Nombres"
            name="nombres"
            autoComplete="nombres"
            autoFocus
            value={props.values.nombres}
            onChange={props.handleChange}
            error={props.touched.nombres && Boolean(props.errors.nombres)}
            helperText={props.touched.nombres && props.errors.nombres}
          />

<TextField
            variant="outlined"
            margin="normal"
            
            fullWidth
            id="apellidoPaterno"
            label="apellido paterno"
            name="apellidoPaterno"
            autoComplete="apellidoPaterno"
            autoFocus
            value={props.values.apellidoPaterno}
            onChange={props.handleChange}
            error={props.touched.apellidoPaterno && Boolean(props.errors.apellidoPaterno)}
            helperText={props.touched.apellidoPaterno && props.errors.apellidoPaterno}
          />
       <TextField
            variant="outlined"
            margin="normal"
            
            fullWidth
            id="apellidoMaterno"
            label="apellidoMaterno"
            name="apellidoMaterno"
            autoComplete="apellidoMaterno"
            autoFocus
            value={props.values.apellidoMaterno}
            onChange={props.handleChange}
            error={props.touched.apellidoMaterno && Boolean(props.errors.apellidoMaterno)}
            helperText={props.touched.apellidoMaterno && props.errors.apellidoMaterno}
          />

{/* <TextField
            variant="outlined"
            margin="normal"
            
            fullWidth
            id="correo"
            label="Correo"
            name="correo"
            autoComplete="correo"
          /> */}
        <TextField
            variant="outlined"
            margin="normal"
            
            fullWidth
            id="correo"
            label="Correo ID"
            name="correo"
            autoComplete="login"
            autoFocus
            value={props.values.correo}
            onChange={props.handleChange}
            error={props.touched.correo && Boolean(props.errors.correo)}
            helperText={props.touched.correo && props.errors.correo}
          />



          <TextField
            variant="outlined"
            margin="normal"
            
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={props.values.password}
            onChange={props.handleChange}
            error={props.touched.password && Boolean(props.errors.password)}
            helperText={props.touched.password && props.errors.password}
          />
           {messageCrud && (
                <Alert severity={messageCrud.code}>
                  {messageCrud.message}
                </Alert>
              )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            endIcon={
              loadingCrud ? (
                <CircularProgress size={20} className={classes.circuloWhite} />
              ) : null
            }
          >
            Crear
          </Button>
          </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default CreateAccountForm;
