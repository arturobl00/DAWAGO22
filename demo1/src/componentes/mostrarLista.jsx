import React from 'react'

export const MostrarLista = (props) => {
  return (
    <div>
      <li>
        <p>Nombre: {props.nombre}</p>
        <p>Edad: {props.edad}</p>
        <p>Carrera: {props.carrera}</p>
      </li>
    </div>
  )
}
