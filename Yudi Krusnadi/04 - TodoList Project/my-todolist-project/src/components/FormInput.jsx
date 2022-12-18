import Button from "./Button";
import { useState } from "react";

const FormInput = ({ addTodoList }) => {
    /* Handle Variable for Value Input */
    const [valueInput, setvalueInput] = useState("");
    /* End Handle Variable for Value Input */

    /* Handle Perubahn Value Text Input */
    const changeValueInput = (e) => {
        setvalueInput(e.target.value);
    };
    /* End Handle Perubahn Value Text Input */

    /* Handle Submit Data */
    const submitNewData = (e) => {
        e.preventDefault();
        if (valueInput !== "") {
            addTodoList(valueInput);
        }
        setvalueInput("");
    };
    /* End Handle Submit Data */

    return (
        <div className="forminput-container">
            <form action="">
                <input
                    type="text"
                    value={valueInput}
                    onChange={changeValueInput}
                />
                <Button textButton="add" action={submitNewData} />
            </form>
        </div>
    );
};

export default FormInput;
