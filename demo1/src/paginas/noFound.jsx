import React from 'react';
import imagen from "./assets/nopages.jpg";
export const NoFound = () => {
  return (
    <div>
        <img src = {imagen} width="1000" height="500"/>
        <h1>Pagina no Existe</h1>
    </div>
  )
}
