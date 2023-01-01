import "../css/app-container.css";
import Home from "../views/Home";
import { Routes, Route } from "react-router-dom";

/* 
1. Router Home -> "/"
2. Router About -> "/home"
3. Router Contact -> "/contact"
 */

const App = () => {
    return (
        <div className="app-container">
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
