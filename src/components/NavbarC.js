import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/as.stone-logo2.png';



function NavbarC() {

    const [scroll, setScroll] = useState(false);

    //Variable for fix the navbar at top
    const active = scroll ? "fixed-top " : "";
    const shadow = scroll ? " 0 5px 8px 0 rgb(0 0 0 / 10%) " : "";

    //Function to handle scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset >= 0) {
            setScroll(true);
        } else {
            setScroll(false);
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
        <div className={`navbar navbar-expand-lg ${active}`} style={{ boxShadow: shadow, background: '#fff' }}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="90" height="90" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/aboutus">Qui somme nous</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/services" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/references">Reference</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default NavbarC;
