import "../css/todolist-container.css";
import Button from "./Button";

const TodoList = ({ data, deleteTodoList, openModal }) => {
    return (
        <div className="todolist-container">
            <h1>{data.nama}</h1>
            <Button
                textButton="edit"
                bgColor="edit"
                action={() => openModal(data)}
            />
            <Button
                textButton="delete"
                bgColor="delete"
                action={() => deleteTodoList(data.id)}
            />
        </div>
    );
};

export default TodoList;
