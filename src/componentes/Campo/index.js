import "./Campo.css"

const Campo = (props)=>{
    //las props es un objeto  que tiene por valor los valores que se mandaron en las propiedaes de la etiqueta html que se creo con el objeto que se exporto en esta clase
    //console.log('Datos externos:', props)
    const placeholderModificado = `${props.placeholder} ...`

    //destructurazión, se guarda en type el valor que venga de props con ese nombre, en caso de no venir se le asigna el valor 'text'
    const {type = 'text'} = props

    console.log(type)


    //al ponerle un value fijo al crear un input lo convertimos en un elemento controlado y para poder recibir y cambiar los cambios utilziamos la función onchange y mediante el target cambamos el valor del elemento seleccionado
    //creamos en el elemento padre los estados de cada elemento y los cambiamos mediante la funcion manejar cambio para poder tener esa informacion en el padre 
    const manejarCambio = (e) =>{
     // console.log("cambio", e.target.value)
      props.actualizarValor(e.target.value)

    }
    return (
      <div className={`campo campo-${type}`}>
        {/** las propiedades de props son strings así que se le puden aplicar métodos y tiene las caracteristicas de un string en js */}
        <label>{props.titulo}</label>
        {/* en los componentes react las etiquetas siempre se cierran, las que en html no se cierran como input aquí se escriben <input/>  */}
        {/** si el prop que buscamos no se mando simplemente lo ignora sin causar error */}
        <input
          placeholder={placeholderModificado}
          required={props.required}
          value={props.valor}
          onChange={manejarCambio}
          type={type}
        />
        {/** si la propiedad no existe, simplemnete no se muestra y no marca error */}
        {props.url}
      </div>
    );
}

export default Campo