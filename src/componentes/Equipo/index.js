import './Equipo.css'
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuración 
    const {colorPrimario, titulo, id } = props.datos

    let objEstilo = {backgroundColor: hexToRgba(colorPrimario, 0.5)};

    let estiloTotulo = { borderColor: colorPrimario}

    let { colaboradores, eliminarColaborador, cambiarColor, CambiarFav } =
      props;

    //console.log(colaboradores)

    //creamos un elemento donde dentro tenedremos una condición js donde si la longitud de los colaboradoras es mayor a 0 muestre el equipo, sino no
    return (
      <>
        {colaboradores.length > 0 && (
          //podemos aplikcar css directamente desde el html con un objeto
          <section className="equipo" style={objEstilo}>
            <input
              type="color"
              className="input-color"
              value={colorPrimario}
              onChange={(evento) => {
                cambiarColor(evento.target.value, id);
              }}
            />
            <h3 style={estiloTotulo}>{titulo}</h3>
            <div className="colaboradores">
              {colaboradores.map((colaborador, index) => (
                <Colaborador
                  datos={colaborador}
                  key={index}
                  colorPrimario={colorPrimario}
                  eliminarColaborador={eliminarColaborador}
                  CambiarFav={CambiarFav}
                />
              ))}
            </div>
          </section>
        )}
      </>
    );
}
export default Equipo