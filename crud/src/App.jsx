import React, { useEffect, useState } from "react";
import {firebase} from './firebase';

function App() {

  //Arreglo que mantenga lo datos durante la ejecución
  const [tareas, setTareas] = useState([])

  //Consumir el api de firebase
  useEffect(() =>{
    const obtenerDatos = async () => {
      try {
        //Declarar la base de datos de Firebase del tipo FireStore
        const db = firebase.firestore()
        //Declarar y consumir la coleccion de la base de datos
        const data = await db.collection('tareas').get()
        //Ver los documentos de la coleccion
        console.log("Datos completos de la coleccion",data.docs)
        //Consumir los datos de los documentos
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data() }))
        //Ver el contenido de los documentos
        console.log("Datos extraidos",arrayData)
        setTareas(arrayData)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])

  return (
    <div className="container-fluid">
      <h1>CRUD React con Firebase</h1>
      <div className="col-md-6">
        <h3>Listado de Tareas</h3>
        <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          {
            tareas.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.estado}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
      <div className="col-md-6">
          <h3>Formulario Agregar Elemento</h3>
      </div>
    </div>
  );
}

export default App;
