import "../css/app.css";
import Header from "./Header";
import TodoListForm from "./TodoListForm";
import { useState } from "react";
import EditTodoList from "./EditTodoList";

const App = () => {
    /* Data List */
    const [Data, setData] = useState([
        {
            id: 1,
            nama: "Usep Syaikal Arifin",
        },
        {
            id: 2,
            nama: "Asep Faisal Arifin",
        },
    ]);

    /* Handle Delete Data */
    const handleDeleteData = (id) => {
        setData(Data.filter((data) => data.id !== id));
    };

    /* Handle Edit Data */
    const [EditData, setEditData] = useState(false);

    const openModal = () => {
        setEditData(true);
    };

    const closeModal = () => {
        setEditData(!EditData);
    };

    return (
        <div className="app-container">
            {/* 1. Header */}
            <Header textHeader="My TodoList Applications" />

            {/* 2. TodoList Form + Button */}
            {Data.map((data) => (
                <TodoListForm
                    key={data.id}
                    dataTodo={data}
                    handleDeleteData={handleDeleteData}
                    openModal={openModal}
                />
            ))}

            {/* Edit TodoList Form */}
            <EditTodoList statusShow={EditData} closeModal={closeModal} />
        </div>
    );
};

export default App;
