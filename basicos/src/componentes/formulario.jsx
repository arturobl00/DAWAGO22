import React, { useState } from 'react'

export const Formulario = () => {
    //Crear 2 constantes
    const [fruta, setFruta] = useState("")
    const [descripcion, setDescripcion] = useState("")
    
   
    const [miDato, setMiDato] = useState ([])


    console.log(fruta)
    console.log(descripcion)

    const guardarDatos = (e) => {
        e.preventDefault()
        
        if(!fruta.trim()){
            console.log('Esta vacio fruta')
            return
        }
        
        if(!descripcion.trim()){
            console.log('Esta vacio descripcion')
            return
        }
        
        console.log('Procesando datos...' + fruta + descripcion)

        setMiDato([
            ...miDato, fruta + " " + descripcion
        ])

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

  return (
    <div>
        <h2>Formulario</h2>
        <div>
            <form onSubmit={guardarDatos}>
                <input 
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={ (e) => setFruta(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese Descripcion"
                    className="form-control mb-2"
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
        </div>
        <br/>
            <ul>
            {
                miDato.map(
                    (item, index) => <li key={index}>{item}</li>
                )
            }
        </ul>
    </div>
  )
}
