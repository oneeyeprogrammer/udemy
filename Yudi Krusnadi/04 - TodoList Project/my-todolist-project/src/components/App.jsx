import Header from "./Header";
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {
    /* Set Data */
    const [myData, setmyData] = useState([
        {
            id: 1,
            nama: "Usep Syaikal Arifin",
            job: "ReactJs Developer Professional",
        },
        {
            id: 2,
            nama: "Asep Faisal Arifin",
            job: "MongoDb Develoepr Professional",
        },
    ]);
    /* End Set Data */

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
        </div>
    );
};

export default App;
