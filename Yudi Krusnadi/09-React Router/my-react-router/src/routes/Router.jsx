import React from "react";
import Home from "../views/Home";
import { Routes, Route } from "react-router-dom";
import About from "../views/About";
import Contact from "../views/Contact";
const Router = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </React.Fragment>
    );
};

export default Router;
