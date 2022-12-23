import "../css/app-container.css";
import Header from "./Header";
import TodoList from "./TodoList";
import { useState } from "react";
import EditModal from "./EditModal";
import AddData from "./AddData.";

const App = () => {
    /* Data TodoList Fronm API example */
    const [Data, setData] = useState([
        {
            id: 1,
            nama: "ReactJs Developer",
        },
        {
            id: 2,
            nama: "MongoDB Professional Developer",
        },
        {
            id: 3,
            nama: "Fullstack Developer",
        },
    ]);

    /* Handle Delete Data TodoList */
    const deleteTodoList = (id) => {
        setData(Data.filter((data) => data.id !== id));
    };

    /* Trigger Modal */
    const [TriggerModal, setTriggerModal] = useState(false);

    const [TriggerModalData, setTriggerModalData] = useState({
        id: "",
        nama: "",
    });

    const openModal = (data) => {
        setTriggerModal(!TriggerModal);
        setTriggerModalData({
            id: data.id,
            nama: data.nama,
        });
    };

    const closeModal = () => {
        setTriggerModal(false);
    };

    const setValueTodoList = (e) => {
        setTriggerModalData({
            ...TriggerModalData,
            nama: e.target.value,
        });
    };

    const setUpdateTodoList = () => {
        const { id, nama } = TriggerModalData;
        const newData = { id, nama };
        const todoListData = Data;
        todoListData.splice(id - 1, 1, newData);
        setData(todoListData);
        setTriggerModal(!TriggerModal);
        setTriggerModalData({
            id: "",
            nama: "",
        });
    };

    /* Input New Data TodoList */
    const addData = (value) => {
        const id = Data.length;
        const newData = {
            id: id + 1,
            nama: value,
        };
        setData([...Data, newData]);
    };

    return (
        <div className="app-container">
            <Header textHeader="My TodoList Applications" />
            {Data.map((data) => (
                <TodoList
                    key={data.id}
                    data={data}
                    deleteTodoList={deleteTodoList}
                    openModal={openModal}
                />
            ))}
            <AddData addData={addData} />
            <EditModal
                triggerModal={TriggerModal}
                closeModal={closeModal}
                data={TriggerModalData}
                change={setValueTodoList}
                update={setUpdateTodoList}
            />
        </div>
    );
};

export default App;
