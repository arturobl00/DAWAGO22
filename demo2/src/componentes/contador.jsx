import React, { Fragment, useState } from 'react'

export const Contador = () => {
    const [miNumero, setMiNumero] = useState(10)

  return (
    <Fragment>
        <h2>Componente que modifica el valor de una constante.</h2>
        <p>El valor actual de la constante es: {miNumero}</p>
    </Fragment>
  )
}

