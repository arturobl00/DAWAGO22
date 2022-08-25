import React from 'react'

export const LlamarLista = (props) => {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}
