import React from 'react'

export const Saludar = (props) => {
  return (
    <div>
        <br/>
        <p>Hola {props.name}, como estas? Es un gusto saludarte. Me agrada saber que te gusta comer {props.gusto}</p>
    </div>
  )
}
