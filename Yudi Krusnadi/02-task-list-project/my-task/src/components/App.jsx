import { useState } from "react";
import FormInput from "./FormInput";
import Header from "./Header";
import Todo from "./Todo";

const App = () => {
    const [profile, setskills] = useState([
        {
            id: 1,
            nama: "Usep Syaikal Arifin",
            job: "ReactJs Developer Professional",
        },
        {
            id: 2,
            nama: "Asep Faisal Arifin",
            job: "MoongoDB Developer Professional",
        },
    ]);

    const deleteTodoList = (id) => console.log(id);

    return (
        <div className="app-container">
            <Header />
            {profile.map((e) => (
                <Todo
                    key={e.id}
                    id={e.id}
                    job={e.job}
                    deleteTodoList={deleteTodoList}
                />
            ))}
            <FormInput />
        </div>
    );
};

export default App;
