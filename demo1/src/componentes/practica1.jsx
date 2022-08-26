import React from 'react'
import { Saludar } from "./saludar";
import { Contador } from "./contador";
import { LlamarLista } from "./llamarLista";
import { MostrarLista } from "./mostrarLista";
import { EstructuraDatos } from "./estructuraDatos";
import { ContenidoDatos } from "./contenidoDatos";
import { FooterP } from './footerP';
import { HeaderP } from './headerP';


//Crear un objeto de tipo array

/*const a = 10; //constante
const a1 = [10, 20, 30]; //constante arreglo
const a2 = {v1: 10, v2: "20", v3: 30} //constante objeto*/

const misDatos = [
    {nombre: "Arturo", edad: 41, carrera: "Sistemas"},
    {nombre: "Victor", edad: 42, carrera: "Industrial"},
    {nombre: "Toño", edad: 38, carrera: "Mecatronica"},
    {nombre: "Edaly", edad: 15, carrera: "Sistemas"},
    {nombre: "Christian", edad: 20, carrera: "Sistemas"}
  ]
  
  const futbolData = [
    {team: "Monterrey", mp: 11, w: 6, d: 3, l: 2},
    {team: "Toluca", mp: 11, w: 6, d: 3, l: 2},
    {team: "Tigres", mp: 10, w: 6, d: 2, l: 2},
    {team: "America", mp: 10, w: 6, d: 1, l: 3},
    {team: "Santos", mp: 9, w: 5, d: 1, l: 3},
  ]
  

export const Practica1 = () => {
  return (
    <div>
      <HeaderP />
        <Saludar name = "Arturo" gusto = "Chilaquiles"/>
        <Contador />
        <LlamarLista>
          {misDatos.map(miDato =>(
            <MostrarLista 
            key={miDato.index} 
            nombre = {miDato.nombre} 
            edad = {miDato.edad} 
            carrera = {miDato.carrera} />
          ))}
        </LlamarLista>
        <EstructuraDatos>
            {
              futbolData.map(
                dataFut => (
                  <ContenidoDatos 
                    key={dataFut.index} 
                    team = {dataFut.team}
                    mp = {dataFut.mp}
                    w = {dataFut.w}
                    d = {dataFut.d}
                    l = {dataFut.l} 
                   />
                )
              )
            }
        </EstructuraDatos>
      <FooterP/>
    </div>
  )
}
