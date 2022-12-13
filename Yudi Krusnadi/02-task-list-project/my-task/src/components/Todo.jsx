import Button from "./Button";
import PropTypes from "prop-types";

const Todo = ({ job, deleteTodoList }) => {
    const delTodoList = () => deleteTodoList();
    return (
        <div className="todo-container">
            <h3>{job}</h3>
            <Button labelButton="edit" variant="btn-edit" />
            <Button
                labelButton="delete"
                variant="btn-delete"
                action={delTodoList}
            />
        </div>
    );
};

Todo.propsTypes = {
    job: PropTypes.string.isRequired,
    deleteTodoList: PropTypes.func.isRequired,
};

export default Todo;
