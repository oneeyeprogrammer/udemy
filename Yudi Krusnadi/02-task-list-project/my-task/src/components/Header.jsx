import logo from "../images/logo-reactjs.svg";

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="logo" />
            <h3>My Task</h3>
        </div>
    );
};

export default Header;
