import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/home-container.css";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <h1>This is Home Page</h1>
            <Footer />
        </div>
    );
};

export default Home;
