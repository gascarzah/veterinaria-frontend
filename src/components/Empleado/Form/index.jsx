import {
  Alert,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../../assets/css/main.css";

import {
  actualizarEmpleado,
  crearEmpleado,
} from "../../../redux/actions/Empleado";

const useStyles = {
  paper: {
    marginTop: 1,
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
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
  nombres: Yup.string().required("El titulo es Obligatorio"),
  apellidoPaterno: Yup.string().required("El apellido paterno es Obligatoria"),
  apellidoMaterno: Yup.string().required("Tipo apellido materno es Obligatorio"),
  tipoDocumento: Yup.string().required("Tipo de documento es Obligatorio"),
  numeroDocumento: Yup.string().required("Numero de documento es Obligatorio"),
  sexo: Yup.string().required("Sexo es Obligatorio"),
  telefono: Yup.string().required("Telefono es Obligatorio"),
  // celular: Yup.string().notRequired(),
  correo: Yup.string().required("Correo es Obligatorio"),
  // ruc: Yup.string().notRequired(),
  // razonSocial: Yup.string().notRequired(),
  direccion: Yup.string().notRequired(),
  // observacion: Yup.string().notRequired(),
});
const EmpleadoForm = ({ editar = false, dataForm, entidad, mantenimiento }) => {
  const state = useSelector((state) => state);
  const { empleadoReducer } = state;
  const { messageCrud, loadingCrud } = empleadoReducer;

  // console.log("messageCrud");
  // console.log(messageCrud);
  const navigate = useNavigate();

  const ejecutar = (valores, resetForm) => {
    
      if (editar) {
        dispatch(actualizarEmpleado({ ...valores }, resetForm, navigate));
      } else {
        dispatch(crearEmpleado({ ...valores }, resetForm, navigate));
      }  
    
    
  };

  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />

      <Formik
        initialValues={dataForm}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(valores, { resetForm }) => {
          console.log(valores);
          ejecutar(valores, resetForm);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={4}>
                <InputLabel id="idtipoDocumento">Tipo Documento</InputLabel>
                <Select
                  style={{ width: "100%" }}
                  variant="outlined"
                  autoFocus
                  labelId="tipoDocumento"
                  id="tipoDocumento"
                  name="tipoDocumento"
                  value={props.values.tipoDocumento}
                  onChange={props.handleChange}
                  label="tipoDocumento"
                  defaultValue={""}
                  disabled={editar}
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  <MenuItem value={1}>Dni</MenuItem>
                  <MenuItem value={2}>Carnet Extranjeria</MenuItem>
                </Select>
                {props.touched.tipoDocumento &&
                  Boolean(props.errors.tipoDocumento) && (
                    <FormHelperText style={{ color: "red" }}>
                      {props.errors.tipoDocumento}
                    </FormHelperText>
                  )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="numeroDocumento"
                  label="Numero de documento"
                  name="numeroDocumento"
                  autoComplete="numeroDocumento"
                  autoFocus
                  value={props.values.numeroDocumento}
                  onChange={props.handleChange}
                  error={
                    props.touched.numeroDocumento &&
                    Boolean(props.errors.numeroDocumento)
                  }
                  helperText={
                    props.touched.numeroDocumento &&
                    props.errors.numeroDocumento
                  }
                  disabled={editar}
                />
              </Grid>
              <Grid item xs={12} sm={4}></Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
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
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="apellidopaterno"
                  label="Apellido Paterno"
                  name="apellidoPaterno"
                  autoComplete="apellidoPaterno"
                  autoFocus
                  value={props.values.apellidoPaterno}
                  onChange={props.handleChange}
                  error={
                    props.touched.apellidoPaterno &&
                    Boolean(props.errors.apellidoPaterno)
                  }
                  helperText={
                    props.touched.apellidoPaterno &&
                    props.errors.apellidoPaterno
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="apellidoMaterno"
                  label="Apellido Materno"
                  name="apellidoMaterno"
                  autoComplete="apellidoMaterno"
                  autoFocus
                  value={props.values.apellidoMaterno}
                  onChange={props.handleChange}
                  error={
                    props.touched.apellidoMaterno &&
                    Boolean(props.errors.apellidoMaterno)
                  }
                  helperText={
                    props.touched.apellidoMaterno &&
                    props.errors.apellidoMaterno
                  }
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <InputLabel id="idSexo">Sexo</InputLabel>
                <Select
                  style={{ width: "100%" }}
                  variant="outlined"
                  autoFocus
                  labelId="sexo"
                  id="sexo"
                  name="sexo"
                  value={props.values.sexo}
                  onChange={props.handleChange}
                  label="sexo"
                  defaultValue={""}
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  <MenuItem value={1}>Femenino</MenuItem>
                  <MenuItem value={2}>Masculino</MenuItem>
                </Select>
                {props.touched.sexo && Boolean(props.errors.sexo) && (
                  <FormHelperText style={{ color: "red" }}>
                    {props.errors.sexo}
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="telefono"
                  label="Telefono"
                  name="telefono"
                  autoComplete="telefono"
                  autoFocus
                  value={props.values.telefono}
                  onChange={props.handleChange}
                  error={
                    props.touched.telefono && Boolean(props.errors.telefono)
                  }
                  helperText={props.touched.telefono && props.errors.telefono}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="correo"
                  label="Correo"
                  name="correo"
                  autoComplete="correo"
                  autoFocus
                  value={props.values.correo}
                  onChange={props.handleChange}
                  error={props.touched.correo && Boolean(props.errors.correo)}
                  helperText={props.touched.correo && props.errors.correo}
                />
              </Grid>
            </Grid>
            {/* <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="celular"
              label="celular"
              name="celular"
              autoComplete="celular"
              autoFocus
              value={props.values.celular}
              onChange={props.handleChange}
              error={props.touched.celular && Boolean(props.errors.celular)}
              helperText={props.touched.celular && props.errors.celular}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="ruc"
              label="ruc"
              name="ruc"
              autoComplete="ruc"
              autoFocus
              value={props.values.ruc}
              onChange={props.handleChange}
              error={props.touched.ruc && Boolean(props.errors.ruc)}
              helperText={props.touched.ruc && props.errors.ruc}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="razonSocial"
              label="razonSocial"
              name="razonSocial"
              autoComplete="razonSocial"
              autoFocus
              value={props.values.razonSocial}
              onChange={props.handleChange}
              error={
                props.touched.razonSocial && Boolean(props.errors.razonSocial)
              }
              helperText={props.touched.razonSocial && props.errors.razonSocial}
            /> */}
            {messageCrud && (
              <Alert severity={messageCrud.code}>{messageCrud.message}</Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              endIcon={
                loadingCrud ?(
                  <CircularProgress size={20} />
                ): null
              }
            >
              {editar ? "Editar" : "Crear"}
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default EmpleadoForm;
