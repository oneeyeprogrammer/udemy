import Header from "./Header";
import TodoList from "./TodoList";
import { useState } from "react";
import FormInput from "./FormInput";
import EditModal from "./EditModal";

const App = () => {
    /* Set Data */
    const [myData, setmyData] = useState([
        {
            id: 1,
            nama: "Usep Syaikal Arifin",
        },
        {
            id: 2,
            nama: "Asep Faisal Arifin",
        },
    ]);

    const [edit, setedit] = useState(false);
    /* End Set Data */

    /* Add Data To TodoList */
    const addTodoList = (data) => {
        const id = myData.length;
        const newData = {
            id: id + 1,
            nama: data,
        };
        setmyData([...myData, newData]);
    };
    /* End Add Data To TodoList */

    /* Delete Data From TodoList */
    const deleteTodoList = (id) => {
        setmyData(myData.filter((data) => data.id !== id));
    };
    /* End Delete Data From TodoList */

    return (
        <div className="app-container">
            {/* Header */}
            <Header />
            {/* End Header */}

            {/* TodoList + Button */}
            {myData.map((data) => (
                <TodoList
                    key={data.id}
                    data={data}
                    deleteTodoList={deleteTodoList}
                />
            ))}
            {/* End TodoList + Button */}

            {/* Form Input + Button */}
            <FormInput addTodoList={addTodoList} />
            {/* End Form Input + Button */}

            {/* Edit Modal */}
            <EditModal />
        </div>
    );
};

export default App;
