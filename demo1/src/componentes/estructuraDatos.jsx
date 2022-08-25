import React from 'react'

export const EstructuraDatos = (props) => {
  return (
    <div>
        <table className='table'>
            <thead>
                <td>Equipo</td>
                <td>Partidos</td>
                <td>Ganados</td>
                <td>Empatados</td>
                <td>Perdidos</td>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    </div>
  )
}
