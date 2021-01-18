import PropTypes from "prop-types";

export const Tecla = ({ className, onClick, llamando, children }) => {
    return (
        <li>
            <button className={className} onClick={onClick} disabled={llamando}>{children}</button>
        </li>
    )
}

Tecla.propTypes = {
    llamando: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}