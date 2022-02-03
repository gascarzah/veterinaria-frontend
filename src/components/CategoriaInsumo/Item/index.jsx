import React from 'react';
import { Link } from 'react-router-dom';




const ItemCategoriaInsumo = () => {

  return (
    <tr>
      <th scope='row'>1</th>
      <td>aaa</td>
      <td>bbb</td>
      <td>S/10</td>
      <td className='d-flex justify-content-around'>
        <a href='#' className='btn btn-warning' >
          Editar
        </a>
        <button className='btn btn-primary'>Ver detalle</button>
        <button className='btn btn-danger' >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ItemCategoriaInsumo