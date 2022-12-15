import Button from "./Button";

const TodoShow = ({ data, deleteTodoList }) => {
    return (
        <div className="todoshow-container">
            <p>{data.nama}</p>
            <Button textButton="edit" />
            <Button
                textButton="delete"
                action={() => deleteTodoList(data.id)}
            />
        </div>
    );
};

export default TodoShow;
