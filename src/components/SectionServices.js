import React from 'react';
import nettoyage1 from '../images/nettoyage/nettoyage1.jpg';
import gardiennage1 from '../images/gardiennage/gardiennage1.jpg';
import jardinage1 from '../images/jardinage/jardinage1.jpg';

function SectionServices() {
    return (
        <div className='container' style={{ padding: '20px', marginTop: '30px' }}>

            {/* Nettoyage */}
            <div className="card mb-3">
                <div className="row g-0">

                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <img src={nettoyage1} className="img-fluid rounded-start float-end" alt="..." />
                    </div>

                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title"><span style={{ color: 'var(--main-color)', fontWeight: 'bold' }}>AS.STONE</span> Nettoyage</h5>
                            <p className="card-text lh-base text-break">
                                vous offre un service de nettoyage impeccable à tout moment avec de qualité supérieure et une satisfaction garantie
                                L'entreprise s'engage à vous offrir un service de qualité à des prix très compétitifs...
                            </p>
                            <a id='cardLink' href='#'>EN SAVOIR +</a>
                        </div>
                    </div>


                </div>
            </div>

            {/* Gardiennage */}
            <div className="card mb-3">
                <div className="row g-0">

                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <img src={gardiennage1} className="img-fluid rounded-start float-end" alt="..." />
                    </div>

                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title"><span style={{ color: 'var(--main-color)', fontWeight: 'bold' }}>AS.STONE</span> Gardiennage</h5>
                            <p className="card-text lh-base text-break">
                            Nos sommes particulièrement vigilants à rendre vos biens moins vulnérables. Parce que la sécurité est avant tout une affaire de vigilance humaine...
                            </p>
                            <a id='cardLink' href='#'>EN SAVOIR +</a>
                        </div>
                    </div>


                </div>
            </div>

            {/* Jardinage */}
            <div className="card mb-3">
                <div className="row g-0">

                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <img src={jardinage1} className="img-fluid rounded-start float-end" alt="..." />
                    </div>

                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title"><span style={{ color: 'var(--main-color)', fontWeight: 'bold' }}>AS.STONE</span> Jardinage</h5>
                            <p className="card-text lh-base text-break">
                            Nous sommes spécialisés dans la création, l'entretien et l'aménagement des jardins, 
                            et espaces verts à casablanca et partout au maroc afin de répondre aux besoins des particuliers, 
                            des syndics de copropriété et des entreprises...
                            </p>
                            <a id='cardLink' href='#'>EN SAVOIR +</a>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default SectionServices