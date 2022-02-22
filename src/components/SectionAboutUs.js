import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../styles/AboutUs.css';

function SectionAboutUs() {
  return (
    <div className='countainer' id='sectionAboutus'>

      <div className='row'>
        
        <div className='col-sm-12 col-lg-6' id='textTitle'>
        <ScrollAnimation animateIn='animate__bounceInLeft' animateOnce={true} delay={0.5}>
          <h2><span>AS.STONE</span> Maroc</h2>
        </ScrollAnimation>
        </div>

        <div className='col-sm-12 col-lg-6' id='textDesc'>
          <div className="card">
            <div className="card-body">
              <p className="card-text">est une société de Multiservice au maroc, Et spécialisée dans le nettoyage général, l'entretien des espaces vert, la sécurité et la maintenance de premier niveau</p>
              <a href="/aboutus" className="btn btn-outline hvr-grow-shadow hvr-radial-out" id='savoirPlus' ><small>EN SAVOIR PLUS</small></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SectionAboutUs