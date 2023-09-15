
import "./MiOrg.css"
const MiOrg = (props)=>{

    //se crea un estado con valor inicial true que cambia cada vez que se ejecuta la función  actualizarMostrar con el valor del argumento de la funcion y se almacena en la variable en mostrar
    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = ()=>{
    //     console.log("mostrar/ocultar elemento", mostrar)
    //     actualizarMostrar(!mostrar)
    // }
    return (
      <section className="OrgSection">
        <h3 className="tittle">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.swich}></img>
      </section>
    );
}
export default MiOrg