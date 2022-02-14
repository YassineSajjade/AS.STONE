import React from 'react';
//import { Carousel } from 'react-bootstrap';

function CarouselC() {
    return (

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" >
                <div className="carousel-item ">
                    {/* <img src="https://img.freepik.com/photos-gratuite/nettoyage-centre-reparation-automobile-aide-vadrouilles-pour-faire-couler-eau-du-sol-epoxy-dans-centre-service-reparation-automobile_61243-462.jpg?size=626&ext=jpg" className="d-block w-100" alt="..."/> */}
                    <div className='overlay' id='overlay1'></div>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{ color: '#1190cb'}}>Nettoyage</h1>
                        <p>Société de nettoyage intervenant sur tout le Maroc, avec d'expériences dans le domaine du nettoyage.</p>
                    </div>
                    {/* </div> */}
                </div>
                <div className="carousel-item active">
                    {/* <img src="https://nobl-business.com/wp-content/uploads/2020/07/s%C3%A9curit%C3%A9-surveillance-et-gardiennage-agadir.jpg" className="d-block w-100" alt="..."/> */}
                    <div className='overlay' id='overlay2'></div>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{ color: 'goldenrod' }}>Gardiennage / Surveillance</h1>
                            <p>Notre Entreprise AS.STONE en surveillance et gardiennage a toujours répondu aux attentes de ses clients en offrant un service de qualité..</p>
                        </div>
                </div>
                <div className="carousel-item ">
                    {/* <img src="https://cdn.verbolia.com/api/images/H4sIAAAAAAAEAJWOsQ6CQBAFf8VsLSyVBZ2NnR3GeuE2x8EeR+4WhBj!XQzG3vIlLzPzhFsUKKFVHVOJ2JghnznWQRzlTfCYQnJ+lBWdJ8sJe14fIRrsKBo3oEaaaVqyfW6PvBstHOFCIjU1!Z90G4IVzsh8HKn4wq60OD!5uzPaQnkqiiOcRTkOpFzxopuh2jsOvw54vQF57Lzq2wAAAA==/travaux-jardinage.jpg" className="d-block w-100" alt="..."/> */}
                    <div className='overlay' id='overlay3'></div>
                    <div className="carousel-caption d-none d-md-block">
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
