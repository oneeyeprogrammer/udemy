import Button from "./Button";
import PropTypes from "prop-types";

const Todo = ({ id, job, deleteTodoList }) => {
    // const delTodoList = () => deleteTodoList();
    return (
        <div className="todo-container">
            <h3>{job}</h3>
            <Button labelButton="edit" variant="btn-edit" />
            <Button
                labelButton="delete"
                variant="btn-delete"
                deleteTodoList={() => deleteTodoList(id)}
            />
        </div>
    );
};

Todo.propsTypes = {
    id: PropTypes.number.isRequired,
    job: PropTypes.string.isRequired,
    deleteTodoList: PropTypes.func.isRequired,
};

export default Todo;
