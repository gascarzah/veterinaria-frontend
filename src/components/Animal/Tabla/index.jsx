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
import { Link } from "react-router-dom";

import {
  getAnimales,
  eliminarAnimal,
} from "../../../redux/actions/Animal";
import TablaHeader from "../../TablaHeader";

const headCells = [
  {
    id: "nombre",
    numeric: false,
    disablePadding: false,
    label: "Nombre",
  },
  {
    id: "descripcion",
    numeric: false,
    disablePadding: false,
    label: "Descripcion",
  },
];

const stableSort = (array, comparator) => {
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
};

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const ListaAnimal = () => {

 const linkAgregar = `/crear-animal`
 

  const state = useSelector((state) => state);
  const { animalReducer } = state;
  
  const { animalList } = animalReducer;

  const [count, setCount] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("idAnimal");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  // const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searched, setSearched] = useState("");
  const [datos, setDatos] = useState([]);
  const [data, setData] = useState("");
  const [rows, setRows] = useState([]);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);
 
  const dispatch = useDispatch();

  useEffect(() => {
    if (animalList?.content) {
      setRows(animalList.content);
      setDatos(animalList.content);
      setPage(animalList.number);
      setCount(animalList.totalElements);
    }
  }, [animalList?.content]);

  useEffect(() => {
    dispatch(getAnimales(page, rowsPerPage));
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = animalList.content.content.map((n) => n.idAnimal);
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
    dispatch(getAnimales(newPage, rowsPerPage));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    dispatch(getAnimales(0, event.target.value));
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

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



  const handleDelete = () => {
    if (rows.length === 1) {
      let update = page - 1;
      if (update < 0) {
        update = 0;
      }

      setPage(update);
      dispatch(eliminarAnimal(data.idAnimal, update, rowsPerPage));
    } else {
      dispatch(eliminarAnimal(data.idAnimal, page, rowsPerPage));
    }

    cerrarModalEliminar();
    setMensaje("Se elimino correctamente");
    setOpenSnackBar(true);
  };

  const handleOpenDelete = (row) => {
    setModalEliminar(true);
    setData(row);
  };

  const cerrarModalEliminar = () => {
    setModalEliminar(false);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
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
          placeholder="Buscar"
          variant="standard"
          name="searched"
          value={searched}
          onChange={handleFilterSearch}
        />
        <Button
          size="small"
          color="primary"
          component={Link}
          to={linkAgregar}
        >
          Agregar
        </Button>
      </Box>

      {!animalList && <CircularProgress color="inherit" />}
      {animalList && rows?.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TablaHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />

            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.idAnimal)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.idAnimal}
                    >
                      <TableCell align="left">{row.nombre}</TableCell>
                      <TableCell align="left">{row.descripcion}</TableCell>
                      <TableCell align="right">
                        <Button size="small">Ver</Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          color="primary"
                          component={Link}
                          to={`/animales/edit/${row.idAnimal}`}
                        >
                          Editar
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          onClick={() => handleOpenDelete(row)}
                        >
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                }
              )}

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


      <Dialog open={modalEliminar} onClose={cerrarModalEliminar}>
        <DialogTitle>Eliminar</DialogTitle>
        <DialogContent>
          <div>
            <p>
              Estás seguro que deseas eliminar al artista <b></b>?{" "}
            </p>
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
        autoHideDuration={6000}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {mensaje}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ListaAnimal;
