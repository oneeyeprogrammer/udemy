import FormInput from "./FormInput";
import Header from "./Header";
import TodoShow from "./TodoShow";

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <TodoShow />
            <FormInput />
        </div>
    );
};

export default App;
