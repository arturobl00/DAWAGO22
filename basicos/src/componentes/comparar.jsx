import React from 'react'

export const Comparar = () => {
    //Constante Nativa
    const temperatura = 21
    const frio = " Frio"
    const calor = " Caluroso"
    //Practica para imprimir datos de una valor o usando constantes
  return (
    <div>
        <p>La temperatura el día de hoy en ajalpan es:
            {
                temperatura > 30 ? <b>{calor}</b> : <b>{frio}</b>
                //temperatura > 30 ? <b>' calor'</b> : <b>' frio'</b>
            }
        </p>
    </div>
  )
}
