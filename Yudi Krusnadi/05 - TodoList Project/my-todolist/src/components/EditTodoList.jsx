import Button from "./Button";
import "../css/edittodolist.css";

const EditTodoList = ({ statusShow, closeModal, data, change, updateData }) => {
    if (statusShow) {
        return (
            <div className="edit-todo-list-container">
                <div className="box-todo-list-container">
                    <h1>Edit TodoList</h1>
                    <input type="text" value={data.nama} onChange={change} />
                    <div className="button-box-todo-list-container">
                        <Button textButton="Edit" action={updateData} />
                        <Button textButton="Cancel" action={closeModal} />
                    </div>
                </div>
            </div>
        );
    } else {
    }
};

export default EditTodoList;
