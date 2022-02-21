import React from 'react';
import '../styles/CarouselC.css';

function CarouselC() {
    return (

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" >
                <div className="carousel-item active">
                    <div className='overlay' id='overlay1'></div>
                    <div className="carousel-caption d-block">
                        <h1 style={{ color: '#1190cb'}}>Nettoyage</h1>
                        <p>Société de nettoyage intervenant sur tout le Maroc, avec d'expériences dans le domaine du nettoyage.</p>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className='overlay' id='overlay2'></div>
                    <div className="carousel-caption d-block" id='carousel-caption2'>
                        <h1 style={{ color: 'goldenrod' }}>Gardiennage / Surveillance</h1>
                        <p>Notre Entreprise AS.STONE en surveillance et gardiennage a toujours répondu aux attentes de ses clients en offrant un service de qualité..</p>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className='overlay' id='overlay3'></div>
                    <div className="carousel-caption d-block">
                        <h1 style={{ color: '#6aaf08' }}>Jardinage</h1>
                        <p>Des experts viennent à domicile pour vous aider à réaliser les travaux de jardinage désirés..</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselC;
