import logo from "../images/logo-reactjs.svg";

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="" />
            <h1>This is Header</h1>
        </div>
    );
};

export default Header;
