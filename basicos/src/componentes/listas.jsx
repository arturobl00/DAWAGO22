import React, { useState } from 'react'

export const Listas = () => {
    //Definir una costante de tipo array con opciones de cambio
    const [numeros, setNumeros] = useState([1,2,3,4,5])
    const [aumento, setAumento] = useState(1)

    const aumentar = () => {
        setAumento(aumento + 1)
        console.log(aumento)
        setNumeros([
            //Los 3 puntos representan la concatenación
            ...numeros,
            aumento + 5
        ])
    }

  return (
    <div>
        <p>Mostrando los elementos de la Lista:</p>
        <ul>
            {
                numeros.map(
                    (item, index) => <li key={index}>{item}</li>
                )
            }  
        </ul>
        <p><button className='btn btn-primary' onClick={aumentar}>Incrementar</button></p>
    </div>
  )
}
