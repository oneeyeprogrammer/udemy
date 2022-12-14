import Button from "./Button";

const TodoShow = () => {
    return (
        <div className="todoshow-container">
            <p>This is My Todo List</p>
            <Button textButton="edit" />
            <Button textButton="delete" />
        </div>
    );
};

export default TodoShow;
