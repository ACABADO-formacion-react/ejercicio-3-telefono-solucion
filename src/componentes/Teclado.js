import PropTypes from "prop-types";
import { TeclaBorrar } from "./TeclaBorrar";
import { TeclaDigito } from "./TeclaDigito";

export const Teclado = ({ teclas, llamando, borrar, anyadeDigito }) => {
    return (
        <ol className="teclado">
            {
                teclas.map(tecla => (
                    <TeclaDigito key={tecla} llamando={llamando} onMarcar={() => anyadeDigito(tecla)}>{tecla}</TeclaDigito>
                ))
            }
            <TeclaBorrar llamando={llamando} borrar={borrar} />
        </ol>
    )
}

Teclado.propTypes = {
    teclas: PropTypes.arrayOf(PropTypes.number).isRequired,
    llamando: PropTypes.bool.isRequired,
    borrar: PropTypes.func.isRequired,
    anyadeDigito: PropTypes.func.isRequired,
}