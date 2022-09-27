import React, { useEffect } from "react";
import {firebase} from './firebase';

function App() {

  //Consumir el api de firebase
  useEffect(() =>{
    const obtenerDatos = async () => {
      try {
        //Declarar la base de datos de Firebase del tipo FireStore
        const db = firebase.firestore()
        //Declarar y consumir la coleccion de la base de datos
        const data = await db.collection('tareas').get()
        //Ver los documentos de la coleccion
        console.log(data.docs)
        //Consumir los datos de los documentos
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data() }))
        //Ver el contenido de los documentos
        console.log(arrayData)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])

  return (
    <div className="container">
      <h1>CRUD React con Firebase</h1>
    </div>
  );
}

export default App;
