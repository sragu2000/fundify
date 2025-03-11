// Navbar.js
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { Assets } from "../../../assets/Assets";
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const handleClick = () => {
        alert("Button clicked!");
    };
    const navigate = useNavigate();
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id) => {
        // alert(`Navigating to section ${id}`);
        const element = document.getElementById(id);
        if (element) {
            // alert("Scrolling to section");
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            console.log(window.innerWidth);
            if (window.innerWidth < 950) {
                setMenuOpen(false);
            } else {
                setMenuOpen(true);
            }
        };
        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const links = [
        {
            href: "/",
            text: "Home",
        },
        {
            text: "All Causes",
            href: "/causes"
        },
        {
            text: "Contact us",
            onClick: () => {
                scrollToSection("sl-home-contact-us");
            },
        },
    ];
    return (
        <header>
            <nav className="nav-container">
                <div className="navbar-container">
                    <div className="logo-container">
                        <Link to="/" className="logo-link">
                            <img src={Assets.logo} alt="Bio World Logo" className="logo-image" />
                            <h3 className="logo-text">Fundify</h3>
                        </Link>
                    </div>

                    {menuOpen && (
                        <ul>
                            {links.map((link, index) => (
                                <li key={index} className="nav-menu-item">
                                    <Link
                                        to={link?.href ? link.href : ""}
                                        onClick={link?.onClick ? link?.onClick : null}
                                    >
                                        {link.text}
                                    </Link>
                                    {/* <Link
                                        to={link?.href ? link.href : ""}
                                        onClick={() => {
                                            if (link?.onClick) link.onClick();
                                            setMenuOpen(false); // Close menu on click
                                        }}
                                    >{link.text}</Link> */}
                                </li>
                            ))}

                            <li></li>
                            <li>
                            </li>
                        </ul>
                    )}
                    <div>
                        <Link to="/donate" className="primary-button nav-donate-button">Donate</Link>
                    </div>
                    <div className="menu" onClick={handleMenuClick}>
                        {!menuOpen ? (
                            <i class="fa-solid fa-bars simple-nav-icon"></i>
                        ) : (
                            <i class="fa-solid fa-xmark simple-nav-icon"></i>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
