import "./Boton.css"

const Boton=(props)=>{
 return (<button className="boton">
    {/**también se peude acceder a los hijos del elemento donde no sólo entran texto o valores de propiedades sino también pueden estra otros elementos de html como img etc y se pueden agregar varios */}
    {props.children}
 </button>)
}

export default Boton