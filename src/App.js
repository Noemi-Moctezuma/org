import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  //colaboradores
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:false
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav:false
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:false
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:true
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:true
    },
  ]);

  //EQUIPOS
  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log('nuevo colaborador', colaborador)
    //spreed operator para copiar el arreglo y añadirlo, no sobreescribirlo
    setColaboradores([...colaboradores, colaborador])
  }

  const cambiarColor = (color, id) => {
    console.log("cambiar color: ", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id == id) {
        equipo.colorPrimario = color;
      }
      
      return equipo;
    })

    setEquipos(equiposActualizados)

  };

  //eliminar colaborador
  const eliminarColaborador= (id)=>{
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id != id)
    console.log('elimiar claboradro', id)
    setColaboradores(nuevosColaboradores)
  }

 //crear equipo
  const crearEquipo = (nuevoEquipo)=>{
    console.log(nuevoEquipo)
    setEquipos([...equipos, {...nuevoEquipo, id:uuidv4()}])
  }

  const CambiarFav = (id)=>{
    console.log(id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id==id){
        colaborador.fav = !colaborador.fav
      }
       return colaborador})
    
    setColaboradores(colaboradoresActualizados)

  }

  return (
    <div>
      {/* hay tres maneras de mostrar un componente
    {Header()}
    <Header><Header/>
    <Header/> */}
      <Header />

      {/**existen los elementos fragments <></> es un elemento vacío, para no crear un div */}
      {/* {mostrarFormulario == true ? <Formulario/> : <></> }
            una manera más resumida de escribir esto es: */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg swich={cambiarMostrar} />

      {/** filtrar solo los colaboradores que pertenezcan a ese equipo */}
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo == equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          cambiarColor={cambiarColor}
          CambiarFav={CambiarFav}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
