import Button from "./Button";
import { useState } from "react";

const FormInput = ({ addTodoList }) => {
    const [state, setstate] = useState(" ");

    const changeValue = (e) => {
        setstate(e.target.value);
    };

    const submitData = (e) => {
        e.preventDefault();
        if (state !== " ") {
            addTodoList(state);
        }
        setstate(" ");
    };

    return (
        <form className="forminput-container" onSubmit={submitData}>
            <input
                type="text"
                placeholder="add task"
                onChange={changeValue}
                value={state}
            />
            <Button labelButton="Add" action={submitData} />
        </form>
    );
};

export default FormInput;
