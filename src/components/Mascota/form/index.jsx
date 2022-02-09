import { AccountCircle, RowingTwoTone } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormHelperText,
  InputLabel,
  listClasses,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {actualizarMascota, crearMascota,
} from "../../../redux/actions/Mascota";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { getTodoTiposMascota } from "../../../redux/actions/TipoMascota";
import { getRazaPorTipoMascota } from "../../../redux/actions/TipoRaza";

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

const initialValues1 = {
  idMascota: '',
  nombre: '',
  peso: '',
  sexo: '',
  idTipoMascota: '',
  idTipoRaza: ''
};

const validationSchema = Yup.object({
  nombre: Yup.string().required("El titulo es Obligatorio"),
  peso: Yup.string().required("El peso es Obligatoria"),
  sexo: Yup.string().required("Sexo es Obligatorio"),
  idTipoMascota: Yup.string().required("Tipo mascota es Obligatorio"),
  idTipoRaza: Yup.string().required("Tipo raza es Obligatorio"),
});



const MascotaForm = ({ editar = false, mascota }) => {
  console.log('mascotaform')
  console.log(mascota)
  const state = useSelector((state) => state)
  const {mascotaReducer} = state
  const {list} = mascotaReducer
  const {loading} = list
  const {tiposMascota} = state
  const {tiposRaza} = state

  const [mascotas, setMascotas] = useState([]);
  const [razas, setRazas] = useState([]);
  const [initialValues, setInitialValues] = useState(editar? {
    idMascota: mascota.idMascota,
    nombre: mascota.nombre,
    peso: mascota.peso,
    sexo: mascota.sexo,
    idTipoMascota: mascota.tipoRaza.tipoMascota.idTipoMascota,
    idTipoRaza: mascota.tipoRaza.idTipoRaza
  } : initialValues1)

  console.log('state')
  console.log(state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoTiposMascota())

   }, []);

   useEffect(() => {
    setMascotas(tiposMascota.list.data) 
    }, [tiposMascota.list.data]);


   useEffect(() => {
    console.log('effect tiposrazas')
    console.log(tiposRaza.list.data)
    
    setRazas(tiposRaza.list.data)
  }, [tiposRaza.list.data]);

   

  useEffect(() => {
    if(editar ){
      console.log('effect tiposrazas sdaada')
      razaPorTipoMascota(mascota.tipoRaza.tipoMascota.idTipoMascota)
    }
   }, [editar]);

  const ejecutar = (valores) => {
    const itemTipoMascota =  mascotas.filter((item) => {
      return item.idTipoMascota === valores.idTipoMascota
    })

    

    const itemTipoRaza =  razas.filter((item) => {
      return item.idTipoRaza === valores.idTipoRaza
    })

    const tipoMascota = itemTipoMascota[0]
    const tipoRaza = itemTipoRaza[0]


    if (editar) {
      dispatch(actualizarMascota({ ...valores,tipoMascota,tipoRaza }));
    } else {
      dispatch(crearMascota({ ...valores,tipoMascota,tipoRaza }));
    }
   
    // cerrarModalInsertar();
  };


  const razaPorTipoMascota = async (idTipoMascota) => {
    
     await dispatch(getRazaPorTipoMascota(idTipoMascota))
  }

  return (
    <Container component="main" maxWidth="xs" style={useStyles.paper}>
      <CssBaseline />
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
            {/* {console.log('antes de props')
            }
            {console.log(props)} */}
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
              {/* {console.log('props')}
     {console.log(props)} */}
     <InputLabel id="idTipoMascota">Sexo</InputLabel>
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
        {props.touched.sexo &&
              Boolean(props.errors.sexo) &&
              <FormHelperText style={{ color: 'red' }}>
                {props.errors.sexo}
                </FormHelperText>
                }


        <InputLabel id="idTipoMascota">Tipo Mascota</InputLabel>
        <Select
        style={{ width: "100%" }}
        variant="outlined"
        autoFocus
          labelId="idTipoMascota"
          id="idTipoMascota"
          name="idTipoMascota"
          value={props.values.idTipoMascota}
          label="animal"
          // onChange={props.handleChange}
          error={props.touched.idTipoMascota && Boolean(props.errors.idTipoMascota)}
          onChange={async e => {
            const { value } = e.target;
            // console.log(value)
            props.setFieldValue('idTipoMascota', value)
            razaPorTipoMascota(value)
            // const _regions = await getRegions(value);
            // console.log(_regions);
            // setFieldValue("country", value);
            // setFieldValue("region", "");
            // setFieldValue("regions", _regions);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {mascotas && mascotas.length > 0 && mascotas.map((item, index) => {
                  return (
                    <MenuItem
                      key={item.idTipoMascota}
                      value={item.idTipoMascota}
                    >
                      {item.nombre}
                    </MenuItem>
                  );
                })}
          
        </Select>
        {props.touched.idTipoMascota &&
              Boolean(props.errors.idTipoMascota) &&
              <FormHelperText style={{ color: 'red' }}>
                {props.errors.idTipoMascota}
                </FormHelperText>
                }


<InputLabel id="idTipoRaza">Tipo Raza</InputLabel>
        <Select
        style={{ width: "100%" }}
        variant="outlined"
        autoFocus
          labelId="idTipoRaza"
          id="idTipoRaza"
          name="idTipoRaza"
          value={props.values.idTipoRaza}
          label="animal"
          onChange={props.handleChange}
          error={props.touched.idTipoRaza && Boolean(props.errors.idTipoRaza)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {console.log('razas')}
           { console.log(razas)}
          {razas && razas.length > 0 && razas.map((item, index) => {
            
                  return (
                    <MenuItem
                      key={item.idTipoRaza}
                      value={item.idTipoRaza}
                    >
                      {item.nombre}
                    </MenuItem>
                  );
                })}
        </Select>
        {props.touched.idTipoRaza &&
              Boolean(props.errors.idTipoRaza) &&
              <FormHelperText style={{ color: 'red' }}>
                {props.errors.idTipoRaza}
                </FormHelperText>
                }

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

export default MascotaForm;
