import logo from "../images/logo-reactjs.svg";

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="Logo ReactJs  " />
            <h1>This is My TodoList</h1>
        </div>
    );
};

export default Header;
