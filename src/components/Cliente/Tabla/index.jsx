import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const stableSort = (array, comparator) => {

    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);

}

 const descendingComparator=(a, b, orderBy) =>{
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
 const getComparator=(order, orderBy) =>{
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  

const TablaCliente = () => {

    const state = useSelector((state) => state)
    const { clienteReducer } = state
    const {loadingClientes, clienteList} = clienteReducer
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("idMascota");
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searched, setSearched] = useState("");
    const [datos, setDatos] = useState([]);
    const [data, setData] = useState("");
    const [rows, setRows] = useState([]);
    const [count, setCount] = useState(0)

    const handleFilterSearch = (e) => {
        setSearched(e.target.value);
        search(e.target.value);
      };
      const search = (filtro) => {
        const filteredRows = datos.filter((row) => {
          return (
            row.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
            row.descripcion.toLowerCase().includes(filtro.toLowerCase())
          );
        });
    
        setRows(filteredRows);
      };

    return (
        <>
            <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          placeholder="Buscar Mascota"
          variant="standard"
          name="searched"
          value={searched}
          onChange={handleFilterSearch}
        />
        <Button size="small" color="primary" 
        component={Link}
        to='/crear-mascota'>
          Agregar
        </Button>
      </Box>
        </>
    );
};

export default TablaCliente;