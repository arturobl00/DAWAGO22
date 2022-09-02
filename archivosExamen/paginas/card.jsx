import React from 'react'
export const Card = (props) => {

  return (
    <div class="col">
                    <div class="card shadow-sm">
                    <img src={props.imagen}/>
                    <div class="card-body">
                        <p class="card-text">{props.descripcion}</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a class="btn btn-sm btn-outline-secondary" href={props.id}>Wallpaper</a>
                        </div>
                        <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
  )
}
