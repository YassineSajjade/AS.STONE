import React from 'react';
import { Link } from 'react-router-dom';
import NavbarC from '../components/NavbarC';
import '../styles/AsStone.css'

function AsStone() {
  return (
    <>
      <NavbarC />

      <div className='sectionQuiSommesNous '>
        <div className='container'>

          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <h1>Qui sommes-nous ?</h1>
            </div>
          </div>

          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/">Accueil</Link>
                </li>
                <li className="nav-item" id='liBefor'>
                  <Link to="/aboutus">Qui sommes-nous</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='sectionBienvenue'>
        <div className='container'>
          <div className='row'>
            <div className='col-12-12 col-lg-5'>
              <div>
                <h1 id='bienvenueSur'>Bienvenue sur :</h1>
                <h2>AS.Stone Maroc</h2>
                <p className='text-justify' id='firstPara'>
                  est une société de Multiservice au maroc, Et spécialisée dans le nettoyage général, l'entretien des espaces vert, la sécurité et la maintenance de premier niveau.
                </p>
                <p id='secondPara'> L'entretien des espaces vert, la sécurité et la maintenance de premier niveau et l'hygiène 3D. Notre société est au service des entreprises, commerçants, syndics et particuliers dans le cadre de prestations ponctuelles ou régulières.
                  Nous offrons nos services en semaine, week-end et jours fériés.
                  Nous répondons à vos demandes dans les plus brefs délais.
                  Le personnel est formé afin d'effectuer des prestations de qualité tout en respectant l'environnement.
                  Nous établissons un suivi qualitatif journalier à l'aide du cahier de liaison, où toutes les remarques faites par nos clients ou l'intervenant sont réglées au cas par cas dans les plus brefs délais.
                </p>
              </div>
            </div>
            <div className='col-md-12 offset-lg-1'></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AsStone