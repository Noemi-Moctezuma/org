import './ListaOpciones.css'

const ListaOpciones=(props)=>{

    //para recorrer el arreglo utilizamos el método map, NO el foreach, ya que se recorre el arreglo y por cada elemento se crea una función que puede tener return
    // arreglo.map((equipo, index) =>{ return <option></option>})
    //la funcion map sólo funciona en arreglos, no para objetos ni strings ni numeros
   
    const manejarCambio = (e)=>{
      console.log('cambio', e.target.value)
      props.actualizarEquipo(e.target.value)
    }

    return (
      <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
          {/**al abrir las llaves dentro dell codigo html React lo interpreta como JS puro */}
          
          <option value = "" disabled defaultValue="" hidden> Seleccionar Equipo</option>
          
          {//react necesita que cada elemento tenga un key unica
            props.equipos.map((equipo, index) =>  <option key={index} value={equipo}>{equipo}</option>)}
        </select>
      </div>
    );
}

export default ListaOpciones