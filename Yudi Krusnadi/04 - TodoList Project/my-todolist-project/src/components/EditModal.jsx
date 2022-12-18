import Button from "./Button";

const EditModal = () => {
    return (
        <div className="modal-container">
            <div className="box-modal">
                <h2>Edit TodoList</h2>
                <input type="text" />
                <Button />
                <Button />
            </div>
        </div>
    );
};

export default EditModal;
