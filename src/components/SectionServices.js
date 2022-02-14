import React from 'react';
import nettoyage1 from '../images/nettoyage/nettoyage1.jpg'
import gardiennage1 from '../images/gardiennage/gardiennage1.jpg'

function SectionServices() {
    return (
        <div className='container' style={{ padding: '20px', marginTop: '30px' }}>

            <div className="card mb-3">
                <div className="row g-0">

                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <img src={nettoyage1} className="img-fluid rounded-start float-end" alt="..." />
                    </div>

                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title"><span style={{ color: 'var(--main-color)', fontWeight: 'bold' }}>AS.STONE Maroc</span> Nettoyage</h5>
                            <p className="card-text lh-base text-break">vous offre un service de nettoyage impeccable à tout moment.<br />
                                L'entreprise vous offre des services de qualité supérieure et une satisfaction garantie.<br />
                                Notre societe regroupe des professionnels spécialisés en nettoyage meuble, industriel, tapis, nettoyage de conduits de ventilation, grand ménage et lavage de vitres.<br />
                                L'Entreprise s'engage à vous offrir un service de qualité à des prix très compétitifs
                            </p>
                            <a id='cardText' href='#'>EN SAVOIR +</a>
                        </div>
                    </div>


                </div>
            </div>

            <div className="card mb-3">
                <div className="row g-0">

                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <img src={gardiennage1} className="img-fluid rounded-start float-end" alt="..." />
                    </div>

                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title"><span style={{ color: 'var(--main-color)', fontWeight: 'bold' }}>AS.STONE Maroc</span> Nettoyage</h5>
                            <p className="card-text lh-base text-break">vous offre un service de nettoyage impeccable à tout moment.<br />
                                L'entreprise vous offre des services de qualité supérieure et une satisfaction garantie.<br />
                                Notre societe regroupe des professionnels spécialisés en nettoyage meuble, industriel, tapis, nettoyage de conduits de ventilation, grand ménage et lavage de vitres.<br />
                                L'Entreprise s'engage à vous offrir un service de qualité à des prix très compétitifs
                            </p>
                            <a id='cardText' href='#'>EN SAVOIR +</a>
                        </div>
                    </div>


                </div>
            </div>

            <div className="card mb-3">
                <div className="row g-0">

                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <img src={nettoyage1} className="img-fluid rounded-start float-end" alt="..." />
                    </div>

                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title"><span style={{ color: 'var(--main-color)', fontWeight: 'bold' }}>AS.STONE Maroc</span> Nettoyage</h5>
                            <p className="card-text lh-base text-break">vous offre un service de nettoyage impeccable à tout moment.<br />
                                L'entreprise vous offre des services de qualité supérieure et une satisfaction garantie.<br />
                                Notre societe regroupe des professionnels spécialisés en nettoyage meuble, industriel, tapis, nettoyage de conduits de ventilation, grand ménage et lavage de vitres.<br />
                                L'Entreprise s'engage à vous offrir un service de qualité à des prix très compétitifs
                            </p>
                            <a id='cardText' href='#'>EN SAVOIR +</a>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default SectionServices