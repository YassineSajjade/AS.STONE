import React from 'react';
import '../styles/AboutUs.css';

function SectionAboutUs() {
  return (
    <div className='countainer' id='sectionAboutus'>

      <div className='row'>

        <div className='col-sm-12 col-lg-6' id='textTitle'>
          <h2><span>AS.STONE</span> Maroc</h2>
        </div>

        <div className='col-sm-12 col-lg-6' id='textDesc'>
          <div className="card">
            <div className="card-body">
              <p className="card-text">est une société de Multiservice au maroc, Et spécialisée dans le nettoyage général, l'entretien des espaces vert, la sécurité et la maintenance de premier niveau</p>
              <a href="#" className="btn btn-outline" id='savoirPlus' ><small>EN SAVOIR PLUS</small></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SectionAboutUs