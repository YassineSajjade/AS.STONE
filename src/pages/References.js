import React from 'react';
import NavbarC from '../components/NavbarC';
import { Link } from 'react-router-dom';
import '../styles/ReferencesP.css';
import nettoyage1 from '../images/nettoyage/nettoyage1.jpg';
import gardiennage1 from '../images/gardiennage/gardiennage1.jpg';
import jardinage1 from '../images/jardinage/jardinage1.jpg';

function References() {
  return (
    <>
      <NavbarC/>

      <div className='sectionReferences'>
        <div className='container'>

          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <h1>Références</h1>
            </div>
          </div>

          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/">Accueil</Link>
                </li>
                <li className="nav-item" id='liBefor'>
                  <Link to="/references">Références</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='sectionConfiance'>
        <div className='title'>
          <h2>ils nous font <span>confiance</span></h2>
        </div>
        <div className='desc'>
          <p>Voici quelques exemples de clients avec lesquels nous avons eu le plaisir de travailler. Ces derniers vous permettront d´appréhender les secteurs et nos domaines d´intervention. Nous travaillons également en confidentialité pour un certain nombre de clients qui par respect contractuel ne sont pas mentionnés.</p>
        </div>
      </div>

      <div className='sectionLogos'>
        <div className='container'>
          <div className='row'>
            <div className='column col-lg-3 col-md-4 col-sm-12'>
              <img src={nettoyage1} alt='...'/>
            </div>
            <div className='column col-lg-3 col-md-4 col-sm-12'>
              <img src={jardinage1} alt='...'/>
            </div>
            <div className='column col-lg-3 col-md-4 col-sm-12'>
              <img src={gardiennage1} alt='...'/>
            </div>
            <div className='column col-lg-3 col-md-4 col-sm-12'>
              <img src={gardiennage1} alt='...'/>
            </div>
            <div className='column col-lg-3 col-md-4 col-sm-12'>
              <img src={gardiennage1} alt='...'/>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default References