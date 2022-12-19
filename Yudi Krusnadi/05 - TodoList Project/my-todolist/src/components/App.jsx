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
    const [StatusShow, setStatusShow] = useState(false);

    const [EditModalData, setEditModalData] = useState({
        id: "",
        nama: "",
    });

    const setNama = (e) => {
        setEditModalData({
            ...EditModalData,
            nama: e.target.value,
        });
    };

    const openModal = (id, nama) => {
        setStatusShow(true);
        setEditModalData({
            id,
            nama,
        });
    };

    const closeModal = () => {
        setStatusShow(!StatusShow);
    };

    const updateData = () => {
        const { id, nama } = EditModalData;
        const newData = { id, nama };
        const newTodoData = Data;
        console.log(newTodoData);
        newTodoData.splice(id - 1, 1, newData);
        console.log(newTodoData);
        setData(newTodoData);
        setStatusShow(!StatusShow);
        setEditModalData({
            id: "",
            nama: "",
        });
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
            <EditTodoList
                statusShow={StatusShow}
                closeModal={closeModal}
                data={EditModalData}
                change={setNama}
                updateData={updateData}
            />
        </div>
    );
};

export default App;
