import '../styles-sheets/Testimonio.css';


export function Testimonio1(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../Image/${props.imagen}`)} alt='Foto' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export function Testimonio2(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../Image/${props.imagen}`)} alt='Foto' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}
export function Testimonio3(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../Image/${props.imagen}`)} alt='Foto' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export function Testimonio4(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../Image/${props.imagen}`)} alt='Foto' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export function Testimonio5(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../Image/${props.imagen}`)} alt='Foto' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}


