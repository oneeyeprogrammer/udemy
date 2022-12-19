import PropTypes from "prop-types";

const Button = ({ textButton, action }) => {
    return (
        <div className="button-container">
            <button onClick={action}>{textButton}</button>
        </div>
    );
};

Button.propType = {
    textButton: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
};

Button.defaultProps = {
    textButton: "This is Button Component",
};

export default Button;
