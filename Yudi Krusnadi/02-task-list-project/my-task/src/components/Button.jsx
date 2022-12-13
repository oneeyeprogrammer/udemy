import PropTypes from "prop-types";

const Button = ({ labelButton, variant, delTodoList }) => {
    // console.log(`button-container ${variant}`);
    return (
        <div className="button-container">
            <button className={variant} onClick={delTodoList}>
                {labelButton}
            </button>
        </div>
    );
};

Button.propsTypes = {
    labelButton: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    deleteTodoList: PropTypes.func.isRequired,
};

export default Button;
