import "../css/todolistform.css";
import Button from "./Button";
import PropTypes from "prop-types";

const TodoListForm = ({ dataTodo, handleDeleteData, openModal }) => {
    return (
        <div className="todolistform-container">
            <h1>{dataTodo.nama}</h1>
            <Button
                textButton="edit"
                action={() => openModal(dataTodo.id, dataTodo.nama)}
            />
            <Button
                textButton="delete"
                action={() => handleDeleteData(dataTodo.id)}
            />
        </div>
    );
};

TodoListForm.propType = {
    dataTodo: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default TodoListForm;
