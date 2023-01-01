import "../css/navbar-container.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1>ReactJs Developer Professional</h1>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
