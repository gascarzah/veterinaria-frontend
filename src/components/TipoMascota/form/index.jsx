import { AccountCircle } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  listClasses,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {actualizarTipoMascota, crearTipoMascota,
} from "../../../redux/actions/TipoMascota";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

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
  descripcion: Yup.string().required("La descripción es Obligatoria"),
});

const TipoMascotaForm = ({ data, editar = false, cerrarModalInsertar, page, size }) => {
  const state = useSelector((state) => state)
  const {tiposMascota} = state
  const {list} = tiposMascota
  const {loading} = list
  const dispatch = useDispatch();

  
  
  const ejecutar = (valores) => {
  //  console.log('page')
  //  console.log(page)

    if (editar) {
      dispatch(actualizarTipoMascota({ ...valores }, page, size));
    } else {
      dispatch(crearTipoMascota({ ...valores }, page, size));
    }
   
    cerrarModalInsertar();
  };

  return (
    <Container component="main" maxWidth="xs" style={useStyles.paper}>
      <CssBaseline />
      <div>
        <Formik
          initialValues={data}
          validationSchema={validationSchema}
          onSubmit={(valores) => {
            ejecutar(valores);
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                endIcon={
                  loading ?(
                    <CircularProgress size={20} />
                  ): null
                }
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

export default TipoMascotaForm;
