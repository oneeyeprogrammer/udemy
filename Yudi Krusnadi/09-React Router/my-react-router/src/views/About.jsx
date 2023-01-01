import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/about-container.css";

const About = () => {
    return (
        <div className="about-container">
            <Navbar />
            <div className="box-about-container">
                <h1>This is About Component</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam vitae harum id excepturi earum esse aut temporibus quo
                    fugiat distinctio deleniti nihil debitis in accusamus at,
                    quae perferendis veniam architecto, perspiciatis hic labore
                    ad. Alias nobis expedita ipsam? Eius earum laborum aperiam
                    perspiciatis non rem ipsum dolore nihil autem, ut,
                    praesentium accusamus facilis dolorem minima pariatur eaque
                    quam modi natus dolorum repellendus aliquam assumenda
                    repudiandae incidunt! Explicabo quisquam hic possimus ipsam
                    laboriosam dolore ratione deleniti atque, provident ut
                    soluta, consequatur, suscipit tempore at cum excepturi quo
                    accusamus? Quod soluta id amet, ea voluptate repellendus
                    cumque facere ipsam repudiandae eius eveniet.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;
