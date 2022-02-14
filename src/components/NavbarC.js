import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import logo from '../images/as.stone-logo.png';


function NavbarC() {
    return (

        // <Navbar bg="light" expand="lg">
        //     <Container>
        //         <Navbar.Brand>
        //             <img src={logo} alt="" width="150" height="90" />
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="ms-auto">
        //                 <Nav.Link href="#home">Accueil</Nav.Link>
        //                 <Nav.Link href="#link">Qui somme nous</Nav.Link>
        //                 <NavDropdown title="Services" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Nettoyage</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Gardiennage</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Interim</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link href="#link">Reference</Nav.Link>
        //                 <Nav.Link href="#link">Contact</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

        <nav className="navbar navbar-expand-lg">
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
