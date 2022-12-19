import "../css/header.css";
import logo from "../images/logo-reactjs.svg";
import PropTypes from "prop-types";

const Header = ({ textHeader }) => {
    return (
        <div className="header-container">
            <img src={logo} alt="" />
            <h1>{textHeader}</h1>
        </div>
    );
};

Header.propTypes = {
    textHeader: PropTypes.string.isRequired,
};

Header.defaultProps = {
    textHeader: "This is Header Component",
};

export default Header;
