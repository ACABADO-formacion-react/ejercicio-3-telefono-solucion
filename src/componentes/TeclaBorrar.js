import PropTypes from "prop-types";
import { Tecla } from "./Tecla";

export const TeclaBorrar = ({ borrar, llamando }) => {
    return (
        <Tecla className="big" onClick={borrar} llamando={llamando}>borrar</Tecla>
    )
}

TeclaBorrar.propTypes = {
    llamando: PropTypes.bool.isRequired,
    borrar: PropTypes.func.isRequired
}