import PropTypes from "prop-types";

const Button = ({ labelButton, variant, action }) => {
    // console.log(`button-container ${variant}`);
    return (
        <div className="button-container">
            <button className={variant} onClick={action}>
                {labelButton}
            </button>
        </div>
    );
};

Button.propsTypes = {
    labelButton: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
};

export default Button;
