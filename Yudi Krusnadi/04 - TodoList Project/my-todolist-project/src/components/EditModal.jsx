import Button from "./Button";

const EditModal = ({ show, closeEditModal }) => {
    if (show) {
        return (
            <div className="modal-container">
                <div className="box-modal">
                    <h2>Edit TodoList</h2>
                    <div className="box-modal-input-container">
                        <input type="text" />
                        <div className="box-modal-input-button-container">
                            <Button textButton="edit" />
                            <Button
                                textButton="cancel"
                                action={closeEditModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
    }
};

export default EditModal;
