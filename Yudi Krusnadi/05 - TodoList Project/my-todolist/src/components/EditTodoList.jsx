import Button from "./Button";
import "../css/edittodolist.css";
import { useState } from "react";

const EditTodoList = ({ statusShow, closeModal }) => {
    if (statusShow) {
        return (
            <div className="edit-todo-list-container">
                <div className="box-todo-list-container">
                    <h1>Edit TodoList</h1>
                    <input type="text" />
                    <div className="button-box-todo-list-container">
                        <Button textButton="Edit" />
                        <Button textButton="Cancel" action={closeModal} />
                    </div>
                </div>
            </div>
        );
    } else {
    }
};

export default EditTodoList;
