import Button from "./Button";

const TodoList = ({ data, deleteTodoList }) => {
    return (
        <div className="todolist-container">
            <h1>{data.nama}</h1>
            <Button textButton="edit" />
            <Button
                textButton="delete"
                action={() => deleteTodoList(data.id)}
            />
        </div>
    );
};

export default TodoList;
