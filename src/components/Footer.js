import React from 'react'

function Footer() {
    return (
        <div className='container' style={{ marginTop: '60px' }}>

            <div className='row'>

                <div className='col-lg-4' style={{ margin: '0 0 10px', padding: '0 15px' }}>
                    <div style={{borderBottom: '3px solid var(--main-color)', marginBottom: '25px'}}>
                        <h3 style={{ color: 'var(--main-color)', fontSize: '18px', fontWeight: '800', textTransform: 'uppercase' }}>
                            <strong>STE AS.STONE MAROC</strong>
                        </h3>
                    </div>
                    <p style={{ fontSize: '15px', lineHeight: '22px', color: '#666', fontWeight: '400' }}>
                        <strong>AS.STONE MAROC est une société multiservice implantée à casablanca maroc.<br />
                            AS.STONE est spécialisée dans le nettoyage général, l'entretien des espaces vert, et la sécurité.<br />
                            Notre société est au service des entreprises et particuliers.</strong>
                    </p>
                </div>

                <div className='col-lg-4'>
                    <div style={{borderBottom: '3px solid var(--main-color)', marginBottom: '25px'}}>
                        <h3 style={{ color: 'var(--main-color)', fontSize: '18px', fontWeight: '800', textTransform: 'uppercase' }}>
                            <strong>CONTACTEZ NOUS</strong>
                        </h3>
                    </div>
                    <div>
                        <ul className='' style={{ listStyle: 'none', padding: '0', fontSize: '15px', lineHeight: '22px', color: '#666', fontWeight: '400' }}>
                            <li className=''>
                                <strong>
                                    <p>34 bloc 118 étage magazin, lalla meriem - Casablanca</p>
                                </strong>
                            </li>
                            <li className=''>
                                <strong>
                                    <p>Gsm: 06 61 59 32 55</p>
                                </strong>
                            </li>
                            <li className=''>
                                <strong>
                                    <p>Email: as.stone.maroc@gmail.com</p>
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div style={{borderBottom: '3px solid var(--main-color)', marginBottom: '25px'}}>
                        <h3 style={{ color: 'var(--main-color)', fontSize: '18px', fontWeight: '800', textTransform: 'uppercase' }}>MENU</h3>
                    </div>
                    <div>
                        <ul class="list-group list-group-flush" style={{ listStyle: 'none', padding: '0', fontSize: '15px', lineHeight: '22px', fontWeight: '400' }}>
                            <li class="list-group-item" style={{ paddingRight: '0', paddingLeft: '0', paddingTop: '0'}}>
                                <strong>
                                    <p style={{color: '#666', margin: '0',}}>
                                        <a style={{textDecoration: 'none', color: '#666'}} href='#'>Accueil</a>
                                    </p>
                                </strong>
                            </li>
                            <li class="list-group-item" style={{ paddingRight: '0', paddingLeft: '0'}}>
                                <strong>
                                    <p style={{color: '#666', margin: '0',}}>
                                        <a style={{textDecoration: 'none', color: '#666'}} href='#'>AS.STONE Maroc</a>
                                    </p>
                                </strong>
                            </li>
                            <li class="list-group-item" style={{ paddingRight: '0', paddingLeft: '0'}}>
                                <strong>
                                    <p style={{color: '#666', margin: '0',}}>
                                        <a style={{textDecoration: 'none', color: '#666'}} href='#'>Services</a>
                                    </p>
                                </strong>
                            </li>
                            <li class="list-group-item" style={{ paddingRight: '0', paddingLeft: '0'}}>
                                <strong>
                                    <p style={{color: '#666', margin: '0',}}>
                                        <a style={{textDecoration: 'none', color: '#666'}} href='#'>Références</a>
                                    </p>
                                </strong>
                            </li>
                            <li class="list-group-item" style={{ paddingRight: '0', paddingLeft: '0'}}>
                                <strong>
                                    <p style={{color: '#666', margin: '0',}}>
                                        <a style={{textDecoration: 'none', color: '#666'}} href='#'>Contact</a>
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