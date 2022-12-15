import PropTypes from "prop-types";
const Button = ({ textButton }) => {
    return (
        <div className="button-container">
            <button>{textButton}</button>
        </div>
    );
};

Button.propTypes = {
    textButton: PropTypes.string.isRequired,
};

Button.defaultProps = {
    textButton: "Click Me!!!",
};

export default Button;
