import { Link } from "react-router-dom";
import "../css/navbar-container.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1>This is Navbar Component</h1>
            <ul>
                <li>
                    <Link className="anchor" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="anchor" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="anchor" to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
