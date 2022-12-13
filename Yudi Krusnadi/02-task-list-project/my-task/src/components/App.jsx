import { useState } from "react";
import FormInput from "./FormInput";
import Header from "./Header";
import Todo from "./Todo";

const App = () => {
    const [profile, setProfile] = useState([
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

    const deleteTodoList = (id) => {
        setProfile(profile.filter((prof) => prof.id !== id));
    };

    const addTodoList = (data) => {
        const id = profile.length;
        const newData = {
            id: id + 1,
            nama: "New Name",
            job: data,
        };
        setProfile([...profile, newData]);
    };

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
            <FormInput addTodoList={addTodoList} />
        </div>
    );
};

export default App;
