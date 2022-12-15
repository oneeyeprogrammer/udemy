import PropTypes from "prop-types";
const Button = ({ textButton, action }) => {
    return (
        <div className="button-container">
            <button onClick={action}>{textButton}</button>
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
