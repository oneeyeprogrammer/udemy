import React from "react";
import Button from "./Button";

class FormInput extends React.Component {
    render() {
        return (
            <div className="form-input-container">
                <input type="text" placeholder="Input Please!!" />
                <Button textButton={"Input"} />
            </div>
        );
    }
}

export default FormInput;
