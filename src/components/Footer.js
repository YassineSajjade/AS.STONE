import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='container' id='footer'>

            <div className='row'>

                <div className='col-lg-4' >
                    <div className='inline'>
                        <h3 className='footerTitle'>
                            <strong>STE AS.STONE MAROC</strong>
                        </h3>
                    </div>
                    <p id='footerDesc'>
                        <strong>AS.STONE MAROC est une société multiservice implantée à casablanca maroc.<br />
                            AS.STONE est spécialisée dans le nettoyage général, l'entretien des espaces vert, et la sécurité.<br />
                            Notre société est au service des entreprises et particuliers.</strong>
                    </p>
                </div>

                <div className='col-lg-4'>
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
                                    <p>Gsm: 06 61 59 32 55</p>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <p>Email: as.stone.maroc@gmail.com</p>
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className='inline'>
                        <h3 className='footerTitle'>MENU</h3>
                    </div>
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{ paddingTop: '0'}}>
                                <strong>
                                    <p>
                                        <a className='hvr-pop'  href='/accuel'>Accueil</a>
                                    </p>
                                </strong>
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    <p>
                                        <a className='hvr-pop' href='/aboutus'>AS.STONE Maroc</a>
                                    </p>
                                </strong>
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    <p>
                                        <a className='hvr-pop' href='/services'>Services</a>
                                    </p>
                                </strong>
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    <p>
                                        <a className='hvr-pop' href='/references'>Références</a>
                                    </p>
                                </strong>
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    <p>
                                        <a className='hvr-pop' href='/contact'>Contact</a>
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