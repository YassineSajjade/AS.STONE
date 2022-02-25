import React from 'react';
import { Link } from 'react-router-dom';
import NavbarC from '../components/NavbarC';
import '../styles/AsStone.css'
import nettoyage1 from '../images/nettoyage/nettoyage1.jpg';
import gardiennage1 from '../images/gardiennage/gardiennage1.jpg';
import jardinage1 from '../images/jardinage/jardinage1.jpg';
import SectionReferences from '../components/SectionReferences';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';

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

            <div className='col-md-12 col-lg-5'>
              <div>
                <h1 id='bienvenueSur'>Bienvenue sur :</h1>
                <h2>AS.Stone Maroc</h2>
                <p className='text-justify' id='firstPara'>
                  est une société de Multiservice au maroc, Et spécialisée dans le nettoyage général, l'entretien des espaces vert, la sécurité et la maintenance de premier niveau.
                </p>
                <p id='secondPara'> L'entretien des espaces vert, la sécurité et la maintenance de premier niveau et l'hygiène 3D. Notre société est au service des entreprises, commerçants, syndics et particuliers dans le cadre de prestations ponctuelles ou régulières.</p>
                <ul id='activiteList'>
                  <li>Nous offrons nos services en semaine, week-end et jours fériés.</li>
                  <li>Nous répondons à vos demandes dans les plus brefs délais.</li>
                  <li>Le personnel est formé afin d'effectuer des prestations de qualité tout en respectant l'environnement.</li>
                  <li>Nous établissons un suivi qualitatif journalier à l'aide du cahier de liaison, où toutes les remarques faites par nos clients ou l'intervenant sont réglées au cas par cas dans les plus brefs délais.</li>
                </ul>
              </div>
            </div>

            <div className='col-md-12 col-lg-6 offset-lg-1'>
              <div className='rightSide'>
                <div>
                  <img className='hvr-bounce-in' src={nettoyage1} alt='...'/>
                </div>
                <div>
                  <img className='hvr-bounce-in' src={gardiennage1} alt='...'/>
                </div>
                <div>
                  <img className='hvr-bounce-in' src={jardinage1} alt='...'/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='sectionValeur'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5  col-md-12'>
              <h5>Nos Principes</h5>
              <ul>
                <li>Respect de tous les individus</li>
                <li>Les intérêts de la Société et de ses employés sont liés</li>
                <li>Importance primordiale de la stratégie dans notre travail</li>
                <li>Innovation est la pierre angulaire de notre croissance</li>
                <li>Valorisation de l'expertise personnelle</li>
                <li>Nous cherchons à être les meilleurs</li>
                <li>Développement durable de nos services et nos prestations</li>
              </ul>
            </div>
            <div className='col-lg-5 offset-lg-2 col-md-12'>
              <h5>Nos Valeurs</h5>
              <ul>
                <li>Intégrité</li>
                <li>Leadership</li>
                <li>Engagement</li>
                <li>Passion pour la réussite</li>
                <li>Confiance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SectionReferences/>
      <Footer/>
      <CopyRight/>
    </>
  )
}

export default AsStone