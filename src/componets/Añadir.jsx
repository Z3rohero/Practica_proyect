import React, { useState } from "react"

export const Añadir = () => {
  const tituloComponente = "anadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''

  });
  const conseguir = e => {
    e.preventDefault();
    let target = e.target;

    let titulo = target.titulo.value;
    let descripcion = target.titulo.descripcion;
    //crear objeto de la pelicula 
    let peli = {
      // etsa funcion getTime obtner la 
      id: new Date().getTime(),
      titulo,
      descripcion
    };
    setPeliState(peli);
    console.log(peliState);

  }
  const { titulo, descripcion } = peliState;

  return (
    <div className="add">

      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {(titulo && descripcion) && "has creado la pelicula :" + titulo}
      </strong>

      <form onSubmit={conseguir}>
        <input type="text"
          id="titulo"
          name="titulo"
          placeholder="Titulo" />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción">
        </textarea>
        <input type="submit"
          id="save"
          value="Guardar" />
      </form>
    </div>

  )
}
