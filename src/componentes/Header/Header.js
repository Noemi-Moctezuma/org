import "./Header.css"

//los nombres de los componentes deben empezar ocn mayúsyulas para poder crear sus etiquetas en html y qeu no se confundan con las etiquetas nativas de html
function Header(){
    //sólo se puede devolver un elemento padre, es decir un solo elemento que abra y cierre, pero este puede tener hijos
    return (
        //las clases de estilo se mandan llamar conclassName para que no se confunda con la palabra reservada class de js
      <header className="header">
        <img src="/img/header.png" alt="Org" />;
      </header>
    );
}

export default Header