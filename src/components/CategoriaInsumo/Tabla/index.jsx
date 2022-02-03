import {
  Button,
  Checkbox,
  
  CircularProgress,
  
  Dialog,
  
  DialogActions,
  
  DialogContent,
  
  DialogTitle,
  
  Modal,
  
  Paper,
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
import TablaHeader from "./TablaHeader";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCategoriasInsumo, eliminarCategoriaInsumo } from "../../../redux/actions/CategoriaInsumo";
import CategoriaInsumoForm from "../form";
import { makeStyles } from "@mui/styles";

// import Confirmacion from '/Confirmacion'

// const customStyles = makeStyles((theme) => ({
//   modal: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)'
//   },
//   iconos:{
//     cursor: 'pointer'
//   }, 
//   inputMaterial:{
//     width: '100%'
//   }
// }));
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



const TablaCategoriaInsumo = () => {
  
  const state = useSelector((state) => state)
  const {categoriaInsumos} = state
  const {list} = categoriaInsumos
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("idCategoriaInsumo");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  // const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searched, setSearched] = useState("");
  const [datos, setDatos] = useState([]);
  const [data, setData] = useState('');
  const [rows, setRows] = useState([]);

  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [editar, setEditar]= useState(false);

  const dispatch = useDispatch()
 
 
  useEffect(() => {

    setRows(list.data?.content)
    setDatos(list.data?.content)
    
    // console.log('useffect 2')
    // console.log(state)
    
  }, [list.data?.content])

  useEffect(() => {
    dispatch(getCategoriasInsumo(page,rowsPerPage))
    // console.log('useffect 1')
    // console.log(state)
  }, [])


  

  const handleRequestSort = (event, property) => {
    
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {

    if (event.target.checked) {
      const newSelecteds = list.data.content.map((n) => n.idCategoriaInsumo);
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
    dispatch(getCategoriasInsumo(newPage,rowsPerPage))
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    dispatch(getCategoriasInsumo(0,event.target.value))
  };


  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


  const handleFilterSearch = (e) => {
    setSearched( e.target.value)
    search(e.target.value)
  }  
    const search = (filtro) => {

      const filteredRows = datos.filter((row) => {
        return (
          row.nombre.toLowerCase().includes(filtro.toLowerCase()) || 
          row.descripcion.toLowerCase().includes(filtro.toLowerCase()) 
        )
      })
      
      // console.log(filteredRows)
      setRows(filteredRows)
    }

    const handleOpenEdit  = (row) => {
      setEditar(true)
      setModalInsertar(true)
      setData(row)
    }
    
    const handleOpenInsert  = () => {
      setEditar(false)
      setModalInsertar(true)
      setData('')
    }


const cerrarModalInsertar = () => {
  setModalInsertar(false)
}

const handleDelete  = (id) => {
  // console.log('antes regreso')
 dispatch(eliminarCategoriaInsumo(id, state))
 
}

// const handleAbrirEliminar= () => {
//   setModalEliminar(true)
// }

// const handleCerrarEliminar= () => {
//   setModalEliminar(false)
// }

  return (
       <>

       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"

      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField placeholder="Buscar Categoria Insumo" 
      variant="standard"
      name="searched"
      value={searched}
      onChange={handleFilterSearch}
      
      />
<Button size='small' color="primary" 
                  onClick={() => handleOpenInsert()}>Agregar</Button>
    </Box>
      
    {!list.data && <CircularProgress color="inherit"/>}
    {list.data && rows?.length > 0 && 
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
          { 
         
          
          stableSort(rows, getComparator(order, orderBy))
            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const isItemSelected = isSelected(row.idCategoriaInsumo);
              const labelId = `enhanced-table-checkbox-${index}`;
             
              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.idCategoriaInsumo)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.idCategoriaInsumo}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.idCategoriaInsumo}
                  </TableCell>
                  <TableCell align="left">{row.nombre}</TableCell>
                  <TableCell align="left">{row.descripcion}</TableCell>
                  <TableCell align="right"><Button size='small'>Ver</Button></TableCell>
                  <TableCell align="right"><Button size='small' color="primary" 
                  onClick={() => handleOpenEdit(row)}>Editar</Button></TableCell>
                  <TableCell align="right"><Button size='small' 
                  onClick={() => handleDelete(row.idCategoriaInsumo)}>Eliminar</Button></TableCell>
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
  }            
    {
    list.data && rows?.length > 0 && 
     <TablePagination
     rowsPerPageOptions={[5, 10, 25]}
     component="div"
     count={list.data.totalElements}
     rowsPerPage={rowsPerPage}
     page={page}
     onPageChange={handleChangePage}
     onRowsPerPageChange={handleChangeRowsPerPage}
   />
}

      <Dialog  open={modalInsertar}
        onClose={cerrarModalInsertar}>
        <DialogTitle>Insertar</DialogTitle>
        <DialogContent>
             <CategoriaInsumoForm data={data} editar={editar}/>
         </DialogContent>
        <DialogActions>
          <Button onClick={cerrarModalInsertar}>Cancel</Button>
          <Button onClick={cerrarModalInsertar}>Subscribe</Button>
        </DialogActions>
      </Dialog>


      {/* <Modal
        open={handleAbrirEliminar}
        onClose={handleCerrarEliminar}>
          <div >
      <p>Estás seguro que deseas eliminar al artista <b></b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>handleDelete(id)}>Sí</Button>
        <Button onClick={()=>handleCerrarEliminar()}>No</Button>

      </div>

    </div>
        </Modal> */}


     </>

);

};



export default TablaCategoriaInsumo;
