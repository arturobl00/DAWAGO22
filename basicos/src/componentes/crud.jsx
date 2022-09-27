import React from 'react'
import { useState } from 'react'

export const Crud = () => {
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [edad, setEdad] = useState()

    const registrar = (e) => {
        e.preventDefault()

        if(!nombre.trim()){
            //alert("El Nombre es necesario para continual")
            console.log("Falta nombre")
            return
        }

        if(!apellido.trim()){
            //alert("El Apellido es necesario para continual")
            console.log("Falta Apellido")
            return
        }
        if(!edad.trim()){
            //alert("La Edad es un campo necesario para continual")
            console.log("Falta edad")
            return
        }
    }

  return (
    <div>
        <h1>Crud con Objetos Array</h1>
        <form onSubmit={registrar}>
            <p><input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/></p>
            <p><input type="text" placeholder='Apellidos' onChange={(e) => setApellido(e.target.value)}/></p>
            <p><input type="text" placeholder='Edad' onChange={(e) => setEdad(e.target.value)}/></p>
            <p><input type="submit" value="Registrar"/></p>
        </form>
    </div>
  )
}
