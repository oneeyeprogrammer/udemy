import FormInput from "./FormInput";
import Header from "./Header";
import Todo from "./Todo";

/* App Component */
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
