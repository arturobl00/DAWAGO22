import React from 'react'

export const ContenidoDatos = (props) => {
  return (
    {team: "Monterrey", mp: 11, w: 6, d: 3, l: 2},
    <div className='table'>
        <tr>
            <td>{props.team}</td>
            <td>{props.mp}</td>
            <td>{props.w}</td>
            <td>{props.d}</td>
            <td>{props.l}</td>
        </tr>
    </div>
  )
}
