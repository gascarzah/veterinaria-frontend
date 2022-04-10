import {
  Alert,
  Autocomplete,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  actualizarMascota,
  crearMascota,
} from "../../../redux/actions/Mascota";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getTodoAnimales } from "../../../redux/actions/Animal";
import { getRazaPorAnimal } from "../../../redux/actions/Raza";
import { getTodoClientes } from "../../../redux/actions/Cliente";

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
  peso: Yup.string().required("El peso es Obligatoria"),
  sexo: Yup.string().required("Sexo es Obligatorio"),
  idAnimal: Yup.string().required("Tipo mascota es Obligatorio"),
  idRaza: Yup.string().required("Tipo raza es Obligatorio"),
  idCliente: Yup.string().required("Cliente es Obligatorio"),
});

const MascotaForm = ({ editar = false, dataForm }) => {
  const state = useSelector((state) => state);
  const { animalReducer, razaReducer, mascotaReducer, clienteReducer } = state;

  const { clienteList } = clienteReducer;
  const { animalList } = animalReducer;
  const { razaList } = razaReducer;
  const { loadingCrud, messageCrud } = mascotaReducer;
  const [animales, setAnimales] = useState([]);
  const [razas, setRazas] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [image, setImage] = useState(null);
  const [errorImage, setErrorImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = () => {
    if (editar) {
      dispatch(getRazaPorAnimal(dataForm.idAnimal));
    }
    dispatch(getTodoAnimales());
    dispatch(getTodoClientes());
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setAnimales(animalList);
  }, [animalList]);

  useEffect(() => {
    setRazas(razaList);
  }, [razaList]);

  useEffect(() => {
    setClientes(clienteList);
  }, [clienteList]);

  const ejecutar = (valores, resetForm) => {
    console.log('ejecutar')
    if (image) {
      if (editar) {
        dispatch(actualizarMascota({ ...valores, image }, resetForm, navigate));
      } else {
        dispatch(crearMascota({ ...valores, image }, resetForm, navigate));
      }
    } else {
      setErrorImage("Campo requerido");
    }
  };

  const razaPorAnimal = async (idAnimal) => {
    await dispatch(getRazaPorAnimal(idAnimal));
  };

  const getItemCliente = (idCliente) =>
    clientes.filter((item) => {
      return item.idCliente === idCliente;
    });

  const itemCliente = (idCliente) => {
    return getItemCliente(idCliente)[0];
  };

  const handleUpladoImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setErrorImage(null);
  };

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
                  id="peso"
                  label="Peso"
                  name="peso"
                  autoComplete="peso"
                  autoFocus
                  value={props.values.peso}
                  onChange={props.handleChange}
                  error={props.touched.peso && Boolean(props.errors.peso)}
                  helperText={props.touched.peso && props.errors.peso}
                />

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
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={0}>Hembra</MenuItem>
                  <MenuItem value={1}>Macho</MenuItem>
                </Select>
                {props.touched.sexo && Boolean(props.errors.sexo) && (
                  <FormHelperText style={{ color: "red" }}>
                    {props.errors.sexo}
                  </FormHelperText>
                )}

                <InputLabel id="idAnimal">Animal</InputLabel>
                <Select
                  style={{ width: "100%" }}
                  variant="outlined"
                  autoFocus
                  labelId="idAnimal"
                  id="idAnimal"
                  name="idAnimal"
                  value={props.values.idAnimal}
                  label="animal"
                  // onChange={props.handleChange}
                  error={
                    props.touched.idAnimal && Boolean(props.errors.idAnimal)
                  }
                  onChange={async (e) => {
                    const { value } = e.target;
                    props.setFieldValue("idAnimal", value);
                    razaPorAnimal(value);
                  }}
                  defaultValue=""
                >
                  <MenuItem value="">
                    <em>None</em>
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

                <InputLabel id="idRaza">Raza</InputLabel>
                <Select
                  style={{ width: "100%" }}
                  variant="outlined"
                  autoFocus
                  labelId="idRaza"
                  id="idRaza"
                  name="idRaza"
                  value={props.values.idRaza}
                  label="animal"
                  onChange={props.handleChange}
                  error={props.touched.idRaza && Boolean(props.errors.idRaza)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  {razas &&
                    razas.length > 0 &&
                    razas.map((item, index) => {
                      return (
                        <MenuItem key={item.idRaza} value={item.idRaza}>
                          {item.nombre}
                        </MenuItem>
                      );
                    })}
                </Select>
                {props.touched.idRaza && Boolean(props.errors.idRaza) && (
                  <FormHelperText style={{ color: "red" }}>
                    {props.errors.idRaza}
                  </FormHelperText>
                )}

                {clientes && clientes.length > 0 && (
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    onChange={(event, obj) =>
                      props.setFieldValue("idCliente", obj.idCliente)
                    }
                    getOptionLabel={(cliente) =>
                      cliente.apellidoPaterno +
                      " " +
                      cliente.apellidoMaterno +
                      ", " +
                      cliente.nombres
                    }
                    defaultValue={""}
                    value={
                      props.values.idCliente
                        ? itemCliente(props.values.idCliente)
                        : null
                    }
                    options={clientes}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Buscar Cliente"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />
                )}
                {messageCrud && (
                  <Alert severity={messageCrud.code}>
                    {messageCrud.message}
                  </Alert>
                )}
                <FormLabel component="legend">Imagen</FormLabel>
                <input
                  type="file"
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  name="image"
                  onChange={handleUpladoImage}
                />
                {image && (
                  <FormHelperText style={{ color: "blue" }}>
                    {image.name}
                  </FormHelperText>
                )}
                {errorImage && (
                  <FormHelperText style={{ color: "red" }}>
                    {errorImage}
                  </FormHelperText>
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

export default MascotaForm;
