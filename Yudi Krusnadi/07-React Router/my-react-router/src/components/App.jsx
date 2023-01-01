import "../css/app-container.css";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
};

export default App;
