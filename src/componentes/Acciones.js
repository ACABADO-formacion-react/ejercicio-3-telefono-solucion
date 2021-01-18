import PropTypes from "prop-types";

export const Acciones = ({ llamando, llamar, colgar, esCompleto }) => {
    return (
        <>
            {!llamando && <a href="llamar" onClick={llamar} className={`llamar${esCompleto() ? " activo" : ""}`}>Llamar</a>
            }
            { llamando && <a href="colgar" onClick={colgar} className="colgar activo">Colgar</a>}
        </>
    )
}

Acciones.propTypes = {
    llamando: PropTypes.bool.isRequired,
    llamar: PropTypes.func.isRequired,
    colgar: PropTypes.func.isRequired,
    esCompleto: PropTypes.func.isRequired
}