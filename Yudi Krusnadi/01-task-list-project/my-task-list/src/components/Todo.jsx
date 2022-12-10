import Button from "./Button";

/* Todo Component */
const Todo = () => {
    return (
        <div className="todo-container">
            <p className="title-todo-container">title item</p>
            <Button textButton="add" />
            <Button textButton="delete" />
        </div>
    );
};

export default Todo;
