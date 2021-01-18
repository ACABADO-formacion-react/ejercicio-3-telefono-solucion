import PropTypes from "prop-types";

export const Display = ({ telefono }) => {
    return (
        <span className="numero">{telefono}</span>
    )
}

Display.propTypes = {
    telefono: PropTypes.string.isRequired
}