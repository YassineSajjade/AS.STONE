import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='container' id='footer'>

            <div className='row'>

                <div className='column col-lg-4' >
                    <div className='inline'>
                        <h3 className='footerTitle'>
                            <strong>STE NFO-SERVICES</strong>
                        </h3>
                    </div>
                    <p id='footerDesc'>
                        <strong>NFO-SERVICES est une société multiservice implantée à casablanca maroc.<br />
                            NFO-SERVICES est spécialisée dans le nettoyage général, l'entretien des espaces vert, et la sécurité.<br />
                            Notre société est au service des entreprises et particuliers.</strong>
                    </p>
                </div>

                <div className='column col-lg-4'>
                    <div className='inline'>
                        <h3 className='footerTitle'>
                            <strong>CONTACTEZ NOUS</strong>
                        </h3>
                    </div>
                    <div>
                        <ul id='footerContact'>
                            <li>
                                <strong>
                                    <p>34 bloc 118 étage magazin, lalla meriem - Casablanca</p>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <p>Gsm: +212 612-787880</p>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <p>Email: nfo.services.maroc@gmail.com</p>
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='column col-lg-4'>
                    <div className='inline'>
                        <h3 className='footerTitle'>MENU</h3>
                    </div>
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{ paddingTop: '0'}}>
                                <strong>
                                    <p>
                                        <Link className='hvr-pop'  to='/'>Accueil</Link>
                                    </p>
                                </strong>
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    <p>
                                        <Link className='hvr-pop' to='/aboutus'>NFO-SERVICES</Link>
                                    </p>
                                </strong>
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    <p>
                                        <Link className='hvr-pop' to='/services'>Services</Link>
                                    </p>
                                </strong>
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    <p>
                                        <Link className='hvr-pop' to='/references'>Références</Link>
                                    </p>
                                </strong>
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    <p>
                                        <Link className='hvr-pop' to='/contact'>Contact</Link>
                                    </p>
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer