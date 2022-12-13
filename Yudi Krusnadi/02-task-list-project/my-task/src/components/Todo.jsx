import Button from "./Button";
import PropTypes from "prop-types";

const Todo = ({ id, job, deleteTodoList, addTodoList }) => {
    // const delTodoList = () => deleteTodoList();
    return (
        <div className="todo-container">
            <h3>{job}</h3>
            <Button
                labelButton="edit"
                variant="btn-edit"
                // addTodoList={() => addTodoList(id)}
            />
            <Button
                labelButton="delete"
                variant="btn-delete"
                action={() => deleteTodoList(id)}
            />
        </div>
    );
};

Todo.propsTypes = {
    id: PropTypes.number.isRequired,
    job: PropTypes.string.isRequired,
    deleteTodoList: PropTypes.func.isRequired,
    addTodoList: PropTypes.func.isRequired,
};

export default Todo;
