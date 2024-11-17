import React, { useState, useEffect } from "react";
import { PiSunHorizonBold } from "react-icons/pi";
import { MdDarkMode } from "react-icons/md";
import logo from "./images/logo.png";

import './Style.css';

export default function Header() {
    // تحديد الحالة بناءً على القيمة المحفوظة في localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark"; // إذا كانت القيمة "dark"، يجعل الوضع الداكن مفعّلًا
    });

    // تحديث body بناءً على الحالة
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    // تبديل الوضع الليلي والعادي وتحديث localStorage
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <header>
            <a  className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <h2>RE-WEB SECURE</h2>
            </a>
            <ul className="nav-links">
                <li><a  className="active">HOME</a></li>
                <li><a >ABOUT</a></li>
                <li><a >SERVICES</a></li>
                <li><a >CONTACT US</a></li>
            </ul>
            <div onClick={toggleDarkMode} style={{ cursor: "pointer", fontSize: "24px" }}>
                {isDarkMode ? <MdDarkMode /> : <PiSunHorizonBold />}
            </div>
        </header>
    );
}