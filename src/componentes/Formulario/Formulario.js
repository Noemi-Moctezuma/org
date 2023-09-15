import { useState } from "react";
import "./Formulario.css"
//si dentro de la carpeta hay un archivo llamado index.js no es necesario agregar el nombre del archivo  y por defecto ya sabe cuál abrir
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton";

const Formulario = (props)=>{

  //creamos un estado para cada elemento del formulario
  const [nombre, setNombre] = useState("")
  const [puesto, setPuesto] = useState("")
  const [foto, setFoto] = useState("")
  const [equipo, setEquipo] = useState("")

  //estados para el equipo
  const [titulo, setTitulo] = useState("")
  const [color, setColor] = useState("")

  const {registrarColaborador, crearEquipo} = props

  const manejarEnvio=(evento)=>{
    console.log('maenjar envio',evento)
    evento.preventDefault()
    //se crea un objeto llave valor, donde el valor son los estados que creamos antes 

    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosAEnviar);
  }
   const manejarNuevoEquipo=(e)=>{
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color})
   }

    return (
      <section className="formulario">
        <form onSubmit={manejarEnvio}>
          <h2>Rellena el formulario para crear el colaborador.</h2>
          {/* las propiedades de los objetos importados de otro componente se mandan como props en el componente que los recibe como argumentos de la funcion qeu creo el componente, no funcionan como propiedades normales de html */}
          {/** si mandamos una prop sin valor se manda con valor true */}
          <Campo             
          titulo="Nombre"
            placeholder="Ingresa el nombre"
            required
            valor={nombre}
            actualizarValor={setNombre}
          />
          <Campo
            titulo="Puesto"
            placeholder="Ingresa el puesto"
            required
            valor={puesto}
            actualizarValor={setPuesto}
          />
          <Campo
            titulo="Foto"
            placeholder="Ingresa el enlace de la foto"
            required
            valor={foto}
            actualizarValor={setFoto}
          />
          <ListaOpciones
            valor={equipo}
            actualizarEquipo={setEquipo}
            equipos={props.equipos}
          />
          <Boton> Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
          <h2>Rellena el formulario para crear el equipo.</h2>
          {/* las propiedades de los objetos importados de otro componente se mandan como props en el componente que los recibe como argumentos de la funcion qeu creo el componente, no funcionan como propiedades normales de html */}
          {/** si mandamos una prop sin valor se manda con valor true */}
          <Campo
            titulo="Titulo"
            placeholder="Ingresa el titulo"
            required
            valor={titulo}
            actualizarValor={setTitulo}
          />
          <Campo
            titulo="Color"
            placeholder="Ingresa el color en Hexadecimal"
            required
            valor={color}
            actualizarValor={setColor}
            type='color'
          />
          <Boton>Registrar Equipo</Boton>
        </form>
      </section>
    );
}

export default Formulario