import PropTypes from "prop-types";

import { Tecla } from "./Tecla"

export const TeclaDigito = ({ onMarcar, llamando, children }) => {
    return (
        <Tecla onClick={onMarcar} llamando={llamando}>{children}</Tecla>
    )
}

TeclaDigito.propTypes = {
    llamando: PropTypes.bool.isRequired,
    onMarcar: PropTypes.func.isRequired
}