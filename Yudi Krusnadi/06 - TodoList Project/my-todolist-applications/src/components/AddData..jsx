import "../css/add-container.css";
import Button from "./Button";
import { useState } from "react";

const AddData = ({ addData }) => {
    const [NewValue, setNewValue] = useState("");
    const handleInput = (e) => {
        setNewValue(e.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        if (NewValue !== "") {
            addData(NewValue);
        }
        setNewValue("");
    };
    return (
        <div className="add-container">
            <form onSubmit={submit}>
                <input type="text" value={NewValue} onChange={handleInput} />
                <Button textButton="add" bgColor="edit" action={submit} />
            </form>
        </div>
    );
};

export default AddData;
