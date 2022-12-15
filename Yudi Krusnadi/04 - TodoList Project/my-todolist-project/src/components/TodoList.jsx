import Button from "./Button";

const TodoList = ({ data }) => {
    return (
        <div className="todolist-container">
            <h1>{data.nama}</h1>
            <Button textButton="edit" />
            <Button textButton="delete" />
        </div>
    );
};

export default TodoList;
