import logo from "../images/logo-reactjs.svg";
import "../css/header-container.css";

const Header = ({ textHeader }) => {
    return (
        <div className="header-container">
            <img src={logo} alt="logo-reactjs" />
            <h1>{textHeader}</h1>
        </div>
    );
};

export default Header;
