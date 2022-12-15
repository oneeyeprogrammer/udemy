import Header from "./Header";
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {
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
    return (
        <div className="app-container">
            {/* Header */}
            <Header />
            {/* End Header */}

            {/* TodoList + Button */}
            {myData.map((data) => (
                <TodoList key={data.id} data={data} />
            ))}
            {/* End TodoList + Button */}

            {/* Form Input + Button */}
        </div>
    );
};

export default App;
