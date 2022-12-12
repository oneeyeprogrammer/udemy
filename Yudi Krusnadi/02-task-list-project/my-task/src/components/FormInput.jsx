import Button from "./Button";

const FormInput = () => {
    return (
        <form className="forminput-container">
            <input type="text" placeholder="add task" />
            <Button labelButton="Add" />
        </form>
    );
};

export default FormInput;
