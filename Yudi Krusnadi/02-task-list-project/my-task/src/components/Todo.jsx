import Button from "./Button";

const Todo = () => {
    return (
        <div className="todo-container">
            <h3>TodoList</h3>
            <Button labelButton="add" />
            <Button labelButton="remove" />
        </div>
    );
};

export default Todo;
