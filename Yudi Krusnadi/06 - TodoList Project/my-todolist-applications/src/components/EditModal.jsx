import Button from "./Button";
import "../css/editmodal-container.css";

const EditModal = ({ triggerModal, closeModal, data, change, update }) => {
    /* Handle Change Value Input */
    if (triggerModal) {
        return (
            <div className="editmodal-container">
                <div className="box-editmodal-container">
                    <h1>Edit TodoList</h1>
                    <input type="text" value={data.nama} onChange={change} />
                    <div className="button-editmodal-container">
                        <Button
                            textButton="update"
                            bgColor="edit"
                            action={update}
                        />
                        <Button
                            textButton="cancel"
                            bgColor="delete"
                            action={closeModal}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default EditModal;
