import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { NavDropdown } from 'react-bootstrap';
import logo from '../images/as.stone-logo.png';



function NavbarC() {

    const [scroll, setScroll] = useState(false);

    //Variable for fix the navbar at top
    const active = scroll ? "fixed-top " : "";
    const shadow = scroll ? " 0px 0px 5px 0px #adb5bd " : "";

    //Function to handle scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 70) {
            setScroll(true);
            console.log('true ' + offset);
        } else {
            setScroll(false);
            console.log('false ' + offset);
        }
    }

    //React Effect
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });



    return (
            <nav className={`navbar navbar-expand-lg ${active}`} style={{ boxShadow: shadow, background: '#fff' }}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="150" height="90" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Qui somme nous</a>
                            </li>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Nettoyage</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Gardiennage</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Interim</NavDropdown.Item>
                            </NavDropdown>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Reference</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    );
}

export default NavbarC;
