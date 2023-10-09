import React from "react";
import "./header.css";

const Header = (props) => {
    return (
        <header className="header">
            <img src={props.src} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header;
