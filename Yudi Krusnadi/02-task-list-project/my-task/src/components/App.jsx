import FormInput from "./FormInput";
import Header from "./Header";
import Todo from "./Todo";

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Todo />
            <Todo />
            <Todo />
            <FormInput />
        </div>
    );
};

export default App;
