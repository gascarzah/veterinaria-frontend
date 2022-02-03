import { Button, Checkbox, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';




const RowTipoRaza = (row, index, isItemSelected, handleClick, handleOpenEdit, handleDelete, page, rowsPerPage) => {
  const isItemSelected = isSelected(row.idTipoRaza);
  const labelId = `enhanced-table-checkbox-${index}`;
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.idTipoRaza)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.idTipoRaza}
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
        {row.idTipoRaza}
      </TableCell>
      <TableCell align="left">{row.nombre}</TableCell>
      <TableCell align="left">{row.descripcion}</TableCell>
      <TableCell align="right">
        <Button size="small">Ver</Button>
      </TableCell>
      <TableCell align="right">
        <Button
          size="small"
          color="primary"
          onClick={() => handleOpenEdit(row)}
        >
          Editar
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button
          size="small"
          onClick={() =>
            handleDelete(row.idTipoRaza, page, rowsPerPage)
          }
        >
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default RowTipoRaza