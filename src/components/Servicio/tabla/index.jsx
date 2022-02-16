import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";


import ServicioForm from "../form";
import { eliminarServicio, getServicios } from "../../../redux/actions/Servicio";
import { Link, useNavigate } from "react-router-dom";
import TablaHeader from "./header";

function stableSort(array, comparator) {
  // console.log(array)
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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}



const TablaServicio = () => {
  const state = useSelector((state) => state);
  
  const { servicioReducer } = state;
  console.log(servicioReducer)
  const { loadingServicios, servicioList } = servicioReducer;
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("idServicio");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  // const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searched, setSearched] = useState("");
  const [datos, setDatos] = useState([]);
  const [data, setData] = useState("");
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0)

  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [editar, setEditar] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate()
     

  useEffect(() => {
 
    if(servicioList?.content){
    setRows(servicioList.content);
    setDatos(servicioList.content);
    setPage(servicioList.number);
    setCount(servicioList.totalElements)
  }
  }, [servicioList?.content]);

  useEffect(() => {
    dispatch(getServicios(page, rowsPerPage));
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = servicioList.content.content.map((n) => n.idServicio);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(getServicios(newPage, rowsPerPage));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    dispatch(getServicios(0, event.target.value));
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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

  const handleOpenEdit = (row) => {
    setEditar(true);
    setModalInsertar(true);
    setData(row);
  };

  const handleOpenInsert = () => {
    setEditar(false);
    setModalInsertar(true);
    setData({
      idServicio: null,
      nombre: "",
      
    });
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };


  const handleDelete = () => {
    // console.log('page')
    // console.log(page)
    // console.log('rowsPerPage')
    // console.log(rowsPerPage)
    if (rows.length === 1) {
      let update = page - 1;
      if (update < 0) {
        update = 0;
      }

      
      setPage(update);
      dispatch(eliminarServicio(data.idServicio, update, rowsPerPage));
    } else {

      dispatch(eliminarServicio(data.idServicio, page, rowsPerPage));
    }
    
    cerrarModalEliminar()
    setMensaje("Se elimino correctamente")
    setOpenSnackBar(true)

      };

  const handleOpenDelete = (row) => {
    setModalEliminar(true);
    setData(row);
  };

  const cerrarModalEliminar = () => {
    setModalEliminar(false);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false)
  }

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
          placeholder="Buscar Servicio"
          variant="standard"
          name="searched"
          value={searched}
          onChange={handleFilterSearch}
        />
        <Button size="small" color="primary" 
        component={Link}
        to='/crear-servicio'>
          Agregar
        </Button>
      </Box>

      {!servicioList && <CircularProgress color="inherit" />}
      {servicioList && rows?.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TablaHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .map((row, index) => {
                  

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.idServicio)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.idServicio}
                    >
                      {/* {console.log(row)} */}
                      <TableCell align="left">{row.nombre}</TableCell>
                      {/* <TableCell align="left">{row.tipoRaza.tipoServicio.nombre}</TableCell>
                      <TableCell align="left">{row.tipoRaza.nombre}</TableCell>
                      <TableCell align="left">{row.peso}</TableCell> */}
                      <TableCell align="right">
                        <Button size="small">Ver</Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          color="primary"
                          component={Link}
                          to={`/servicio/edit/${row.idServicio}`}
                        >
                          Editar
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button size="small"
                          onClick={() => handleOpenDelete(row)}
                        >
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}

              <TableRow
                style={{
                  height: 33 * emptyRows,
                }}
              >
                <TableCell colSpan={9} />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {rows?.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}

      <Dialog open={modalInsertar} onClose={cerrarModalInsertar}>
        <DialogTitle>Insertar</DialogTitle>
        <DialogContent>
          <ServicioForm
            data={data}
            editar={editar}
            cerrarModalInsertar={cerrarModalInsertar}
            page={page}
            size={rowsPerPage}
          />
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={cerrarModalInsertar}>Cancel</Button>
          <Button onClick={cerrarModalInsertar}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>



      <Dialog open={modalEliminar} onClose={cerrarModalEliminar}>
        <DialogTitle>Eliminar</DialogTitle>
        <DialogContent>
        <div >
      <p>Estás seguro que deseas eliminar al artista <b></b>? </p>
      </div> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Eliminar</Button>
          <Button onClick={cerrarModalEliminar}>Cerrar</Button>
        </DialogActions>
      </Dialog>


      <Snackbar
        open={openSnackBar}
        onClose={handleCloseSnackBar}
        autoHideDuration={6000}>
        <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
          {mensaje}
        </Alert>
        </Snackbar>

    </>
  );
};

export default TablaServicio;
