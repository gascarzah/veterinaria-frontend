import {
  Alert,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  actualizarAnimal,
  crearAnimal,
} from "../../../redux/actions/Animal";
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
  nombre: Yup.string().required("El nombre es Obligatorio"),
  descripcion: Yup.string().required("La descripción es Obligatoria"),
});

const AnimalForm = ({ editar = false, dataForm }) => {
   const state = useSelector((state) => state);
  const { animalReducer } = state;
  const { loadingCrud, messageCrud } = animalReducer;
  const dispatch = useDispatch();
  

  const ejecutar = (valores,resetForm) => {
    if (editar) {
      dispatch(
        actualizarAnimal({ ...valores },resetForm,navigate)
      );
    } else {
      dispatch(
        crearAnimal({ ...valores },resetForm,navigate)
      );
    }

  };
  const navigate = useNavigate()

  return (
    <Container component="main" maxWidth="xs" style={useStyles.paper}>
      <CssBaseline />
      <div>
        <Formik
          initialValues={dataForm}
          validationSchema={validationSchema}
          onSubmit={(valores,{resetForm}) => {
            ejecutar(valores,resetForm);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
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

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="descripcion"
                label="Descripcion"
                name="descripcion"
                autoComplete="descripcion"
                value={props.values.descripcion}
                onChange={props.handleChange}
                error={
                  props.touched.descripcion && Boolean(props.errors.descripcion)
                }
                helperText={
                  props.touched.descripcion && props.errors.descripcion
                }
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
                endIcon={loadingCrud ? <CircularProgress size={20} /> : null}
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

export default AnimalForm;
