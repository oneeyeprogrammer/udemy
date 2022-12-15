import Button from "./Button";
import PropTypes from "prop-types";
import { useState } from "react";

const FormInput = ({ addData }) => {
    const [newValue, setnewValue] = useState("");

    const changeValueInputDetect = (e) => {
        setnewValue(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (newValue !== "") {
            addData(newValue);
        }
        setnewValue("");
    };

    return (
        <div className="form-input-container">
            <form action="" onSubmit={submit}>
                <input
                    type="text"
                    onChange={changeValueInputDetect}
                    value={newValue}
                />
                <Button textButton="add" action={submit} />
            </form>
        </div>
    );
};

FormInput.propTypes = {
    addData: PropTypes.func.isRequired,
};

export default FormInput;
