import './App.css'
import {Listado} from "./componets/Listado"
import {Buscador} from "./componets/Buscador"
import {Añadir} from "./componets/Añadir"
export default function App() {
  return (

    <div>
      <div className="layout">
        {/*<!--Cabecera-->*/}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>Cuevana</h1>
        </header>

        {/*!--Barra de navegación-->*/}
        <nav className="nav">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Peliculas</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>

        {/*<!--Contenido principal-->*/}
        <Listado/>

        {/*<!--Barra lateral-->*/}
        <aside className="lateral">
          <Buscador></Buscador>
           <Añadir></Añadir>
        
        </aside>

        {/*<!--Pie de página-->*/}
        <footer className="footer">
          &copy; Practica en react - <a href="#">zero</a>
        </footer>

      </div>

    </div>
  )
}
