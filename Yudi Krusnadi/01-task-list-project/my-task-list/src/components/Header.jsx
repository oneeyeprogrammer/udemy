import logo from "../images/logo-reactjs.svg";

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="Logo ReactJs" />
            <h2>Task List</h2>
        </div>
    );
};

export default Header;
