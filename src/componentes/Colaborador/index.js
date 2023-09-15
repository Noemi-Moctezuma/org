import './Colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";


const Colaborador = (props)=>{
    
    let {nombre, puesto, foto, id, fav} = props.datos
    let { colorPrimario, eliminarColaborador, CambiarFav } = props;
   
    return (
      <div className="colaborador">
        {/**se debecrear un arrow functions dentro de el onclick para que no se ejecute la funcion al crear los elelemntos */}
        <AiFillCloseCircle
          onClick={() => {
            eliminarColaborador(id);
          }}
          className="eliminar"
        />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
          <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
          <h4>{nombre}</h4>
          <h5>{puesto}</h5>
          {fav ? (
            <AiFillHeart color="red" onClick={() => CambiarFav(id)} />
          ) : (
            <AiOutlineHeart onClick={() => CambiarFav(id)} />
          )}
        </div>
      </div>
    );
}

export default Colaborador