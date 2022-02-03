import { AccountCircle } from "@mui/icons-material";
import {

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
import {actualizarTipoRaza, crearTipoRaza,
} from "../../../redux/actions/TipoRaza";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { getTodoTiposMascota } from "../../../redux/actions/TipoMascota";

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
  // idTipoMascota: Yup.string().required("Seleccionar un tipo de mascota")
});

const TipoRazaForm = ({ data, editar = false, cerrarModalInsertar, page, size }) => {
  const state = useSelector((state) => state)
  const {tiposRaza} = state
  const {tiposMascota} = state
  const {list} = tiposRaza
  const {loadingtiporaza} = list
  const [mascotas, setMascotas] = useState([]);
  // const [idTipoMascota, setIdTipoMascota] = useState(null);
  const [selectedTipoMascota, setSelectedTipoMascota] = useState(data?.tipoMascota || null);
  const [errorTipoMascota, setErrorTipoMascota] = useState(null);
  const dispatch = useDispatch();

  // console.log('data')
  // console.log(data)

  useEffect(() => {
     dispatch(getTodoTiposMascota())
    }, []);

  useEffect(() => {
    // console.log('valores list')
    setMascotas(tiposMascota.list.data)
   }, [tiposMascota.list.data]);


  //  useEffect(() => {
  //   setSelectedTipoMascota()
  //  }, [selectedTipoMascota]);

  const ejecutar = (valores) => {

    // const itemTipoMascota =  mascotas.filter((item) => {
    //   return item.idTipoMascota === valores.idTipoMascota
    // })
    // const tipoMascota = itemTipoMascota[0]
    console.log('selectedTipoMascota')
    console.log(selectedTipoMascota)
    
    
    
    
    if (selectedTipoMascota) {
      if (editar) {
        dispatch(actualizarTipoRaza({ ...valores, selectedTipoMascota  }, page, size));
      } else {
        dispatch(crearTipoRaza({ ...valores,selectedTipoMascota }, page, size));
      }
        cerrarModalInsertar();
    } else {
      setErrorTipoMascota("Seleccionar un tipo de mascota");
    }

    
  };

  const handleChangeMascota = (e) => {
    
    setSelectedTipoMascota(e.target.value);
    setErrorTipoMascota(null);
  
  };

  const getTipoMascotaIndex = (id, mascotas) => {
 
    for(let i=0; i <mascotas.length; i++){
      if(mascotas[i].idTipoMascota === id){
        return i
      }
    }
  }

  if (!mascotas) return <h1>Cargando ... </h1>;

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
              <InputLabel id="idTipoMascota">Seleccionar Tipo Mascota</InputLabel>
              <Select
              style={{ width: "100%" }}
              variant="outlined"
                labelId="idTipoMascota"
                autoFocus
                name="idTipoMascota"
                label={"Seleccionar Tipo Mascota"}
                value={mascotas[getTipoMascotaIndex(selectedTipoMascota?.idTipoMascota, mascotas)] }
                onChange={handleChangeMascota}
                defaultValue=""
                
              >
                
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {mascotas.map((item, index) => {
                  return (
                    <MenuItem
                      key={item.idTipoMascota}
                      value={item}
                    >
                      {item.nombre}
                    </MenuItem>
                  );
                })}
              </Select>
              {"Seleccionar Tipo MAscota: "+ selectedTipoMascota.idTipoMascota}
              {errorTipoMascota && (
              <FormHelperText style={{ color: 'red' }}>
                {errorTipoMascota}
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
                endIcon={loadingtiporaza ? <CircularProgress size={20} /> : null}
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

export default TipoRazaForm;
