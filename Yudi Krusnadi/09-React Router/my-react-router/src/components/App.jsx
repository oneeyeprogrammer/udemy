import Router from "../routes/Router";
import "../css/app-container.css";

/* 
1. Router Home -> "/"
2. Router About -> "/home"
3. Router Contact -> "/contact"
 */

const App = () => {
    return (
        <div className="app-container">
            <Router />
        </div>
    );
};

export default App;
