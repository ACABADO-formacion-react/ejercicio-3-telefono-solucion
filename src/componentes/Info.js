import PropTypes from "prop-types";

export const Info = ({ llamando }) => {
    return (
        <span className={`mensaje${llamando ? "" : " off"}`}>Llamando...</span>
    )
}

Info.propTypes = {
    llamando: PropTypes.bool.isRequired
}