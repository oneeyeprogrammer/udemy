import FormInput from "./FormInput";
import Header from "./Header";
import TodoShow from "./TodoShow";
import { useState } from "react";

const App = () => {
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

    const deleteTodoList = (id) => {
        setmyData(myData.filter((data) => data.id !== id));
        // console.log(id);
    };

    const addData = (value) => {
        const id = myData.length;
        const newData = {
            id: id + 1,
            nama: value,
        };
        setmyData([...myData, newData]);
    };

    return (
        <div className="app-container">
            <Header />
            {myData.map((data) => (
                <TodoShow
                    key={data.id}
                    data={data}
                    deleteTodoList={deleteTodoList}
                />
            ))}
            <FormInput addData={addData} />
        </div>
    );
};

export default App;
