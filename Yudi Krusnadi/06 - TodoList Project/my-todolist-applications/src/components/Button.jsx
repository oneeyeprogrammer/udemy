const Button = ({ textButton, bgColor, action }) => {
    return (
        <div className="button-container">
            <button className={bgColor} onClick={action}>
                {textButton}
            </button>
        </div>
    );
};

export default Button;
