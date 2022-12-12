import Button from "./Button";

const Todo = () => {
    return (
        <div className="todo-container">
            <h3>TodoList</h3>
            <Button labelButton="edit" variant="btn-edit" />
            <Button labelButton="delete" variant="btn-delete" />
        </div>
    );
};

export default Todo;
