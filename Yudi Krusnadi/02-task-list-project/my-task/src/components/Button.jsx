const Button = ({ labelButton, variant }) => {
    // console.log(`button-container ${variant}`);
    return (
        <div className="button-container">
            <button className={variant}>{labelButton}</button>
        </div>
    );
};
export default Button;
