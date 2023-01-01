import "../css/home-container.css";
import jsLogo from "../images/Logo JavaScript.png";
import reactJsLogo from "../images/Logo ReactJs.png";
import nodeJs from "../images/Logo NodeJs.png";
import mongoDB from "../images/Logo MongoDB.png";

const Home = () => {
    return (
        <div className="home-container">
            <div className="box-home-container">
                <h1>Memory</h1>
                <div className="image-container">
                    <img src={jsLogo} alt="" />
                    <img src={reactJsLogo} alt="" />
                    <img src={nodeJs} alt="" />
                    <img src={mongoDB} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
