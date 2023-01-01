import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/home-container.css";

const Home = () => {
    const [Data, setData] = useState([
        {
            id: 1,
            name: "JavaScript",
            description: "JavaScript Programming Language",
            image: require("../images/Logo JavaScript.png"),
        },
        {
            id: 2,
            name: "ReactJs",
            description: "ReactJs Library for Front End Development",
            image: require("../images/Logo ReactJs.png"),
        },
        {
            id: 3,
            name: "MongoDB",
            description: "MongoDB Database NoSQL",
            image: require("../images/Logo MongoDB.png"),
        },
        {
            id: 4,
            name: "NodeJs",
            description: "JavaScript Runtime",
            image: require("../images/Logo NodeJs.png"),
        },
    ]);
    return (
        <div className="home-container">
            <Navbar />
            <div className="box-home-container">
                <h1 className="home-header-container">This is My Home</h1>
                <div className="img-list-container">
                    {Data.map((data) => (
                        <div className="img-container">
                            <img
                                key={data.id}
                                src={data.image}
                                alt={data.name}
                                name="img"
                            />
                            <h1>{data.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
