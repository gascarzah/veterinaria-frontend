import {
  Alert,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actualizarRaza, crearRaza } from "../../../redux/actions/Raza";
import { getTodoAnimales } from "../../../redux/actions/Animal";
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
  idAnimal: Yup.string().required("Seleccionar un animal"),
});

const RazaForm = ({ editar = false, dataForm }) => {
  const state = useSelector((state) => state);
  const { razaReducer, animalReducer } = state;
  const { loadingCrud, messageCrud } = razaReducer;
  const { animalList } = animalReducer;
  const dispatch = useDispatch();
  const [animales, setAnimales] = useState([]);

  
  useEffect(() => {
    dispatch(getTodoAnimales());
  }, []);

  useEffect(() => {
    setAnimales(animalList);
  }, [animalList]);

  const ejecutar = (valores, resetForm) => {
    console.log('valores')
    console.log(valores)

    const itemAnimal =  animales.filter((item) => {
      return item.idAnimal === valores.idAnimal
    })
    const animal = itemAnimal[0]

    if (editar) {
      dispatch(actualizarRaza({ ...valores, animal }, resetForm, navigate));
    } else {
      dispatch(crearRaza({ ...valores, animal }, resetForm, navigate));
    }
  };
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs" style={useStyles.paper}>
      <CssBaseline />

      {animales && animales.length > 0 && (
        <div>
          <Formik
            initialValues={dataForm}
            validationSchema={validationSchema}
            onSubmit={(valores, { resetForm }) => {
              ejecutar(valores, resetForm);
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <InputLabel id="idAnimal">Seleccionar Animal</InputLabel>
                <Select
                  style={{ width: "100%" }}
                  variant="outlined"
                  labelId="idAnimal"
                  autoFocus
                  name="idAnimal"
                  label={"Seleccionar Animal"}
                  value={props.values.idAnimal}
                  onChange={props.handleChange}
                  error={
                    props.touched.idAnimal && Boolean(props.errors.idAnimal)
                  }
                  defaultValue=""
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {animales.map((item, index) => {
                    return (
                      <MenuItem key={item.idAnimal} value={item.idAnimal}>
                        {item.nombre}
                      </MenuItem>
                    );
                  })}
                </Select>

                {props.touched.idAnimal && Boolean(props.errors.idAnimal) && (
                  <FormHelperText style={{ color: "red" }}>
                    {props.errors.idAnimal}
                  </FormHelperText>
                )}

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
                    props.touched.descripcion &&
                    Boolean(props.errors.descripcion)
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
      )}
    </Container>
  );
};

export default RazaForm;
