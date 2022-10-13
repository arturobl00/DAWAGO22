import React, { useState } from 'react'

export const Formulario = () => {
    const [dato1, setDato1] = useState(0)
    const [dato2, setDato2] = useState(0)
    const [resultado, setResultado] = useState(0)
    
    const suma = () => {
        console.log(dato1, dato2)
    }

  return (
    <div>
        <h1>Formulario</h1>
        <form>
            <input 
            type="text" 
            placeholder='Dato 1' 
            onChange={e => setDato1(e.target.value)}
            />
            <input 
            type="text" 
            placeholder='Dato 2' 
            onChange={e => setDato2(e.target.value)}
            />
            <button onClick={suma()}>Sumar</button>
        </form>
    </div>
  )
}
