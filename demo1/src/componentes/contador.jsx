import React from 'react'
import { useState } from 'react'

export const Contador = () => {
    //Con useState puedo declarar constantes, arreglos y objetos
    const [conta, setConta] = useState(100)
  return (
    <div>
        <p>Has precionado # {conta} veces el boton</p>
        <table>
            <tr>
                <td><button className='btn btn-success' onClick={() => setConta(conta + 1)}>Incrementa</button></td>
                <td><button className='btn btn-danger' onClick={() => setConta(conta - 1)}>Decrementa</button></td>
            </tr>
        </table>       
    </div>
  )
}
