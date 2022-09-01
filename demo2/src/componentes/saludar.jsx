import React from 'react'

export const Saludar = (props) => {
  return (
    <div>
        <p>Hola <b>{props.nombre}</b> gusto 
        en saludarte espero que todo este bien en <b>{props.ciudad}</b>, 
        municipio del estado de <b>{props.estado}</b>.</p>
    </div>
  )
}
