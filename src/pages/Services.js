import React from 'react';
import NavbarC from '../components/NavbarC';
import { Link } from 'react-router-dom';
import '../styles/ServicesP.css';
import nettoyage1 from '../images/nettoyage/nettoyage1.jpg';
import gardiennage1 from '../images/gardiennage/gardiennage1.jpg';
import jardinage1 from '../images/jardinage/jardinage1.jpg';
import SectionReferences from '../components/SectionReferences';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';

function Services() {
  return (
    <>
      <NavbarC />

      <div className='sectionOurServices '>
        <div className='container'>

          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <h1>Nos services</h1>
            </div>
          </div>

          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/">Accueil</Link>
                </li>
                <li className="nav-item" id='liBefor'>
                  <Link to="/services">nos services</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='sectionNettoyage' id='service-nettoyage'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <img src={nettoyage1} alt='...' />
            </div>
            <div className='col-lg-6 col-md-12'>
              <p>Dolore esse amet ad in. Aute adipisicing esse magna esse pariatur excepteur amet. Laboris magna laborum fugiat ut exercitation ea. Id adipisicing dolore ullamco magna aute mollit duis aliquip ex mollit consequat fugiat. In consequat enim esse consequat nisi elit occaecat eu aliqua. Velit qui eiusmod nisi laboris deserunt consectetur.

                Dolore et ea culpa excepteur duis elit elit do irure sint. Voluptate magna aute ad voluptate. Nulla ad anim incididunt id est excepteur deserunt amet. Esse magna amet irure proident consectetur elit excepteur proident excepteur amet. Do veniam sint ex qui commodo amet commodo qui et ea. Laborum culpa officia ullamco deserunt nulla consectetur minim et Lorem do elit.

                Id dolor anim Lorem esse consequat cupidatat non quis voluptate eiusmod. Mollit cillum exercitation fugiat exercitation nulla laboris labore ad anim enim ea labore irure. Quis nostrud quis ad est aliqua do anim deserunt ipsum id esse culpa.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='sectionGardiennage' id='service-gardiennage'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <p>Dolore esse amet ad in. Aute adipisicing esse magna esse pariatur excepteur amet. Laboris magna laborum fugiat ut exercitation ea. Id adipisicing dolore ullamco magna aute mollit duis aliquip ex mollit consequat fugiat. In consequat enim esse consequat nisi elit occaecat eu aliqua. Velit qui eiusmod nisi laboris deserunt consectetur.

                Dolore et ea culpa excepteur duis elit elit do irure sint. Voluptate magna aute ad voluptate. Nulla ad anim incididunt id est excepteur deserunt amet. Esse magna amet irure proident consectetur elit excepteur proident excepteur amet. Do veniam sint ex qui commodo amet commodo qui et ea. Laborum culpa officia ullamco deserunt nulla consectetur minim et Lorem do elit.

                Id dolor anim Lorem esse consequat cupidatat non quis voluptate eiusmod. Mollit cillum exercitation fugiat exercitation nulla laboris labore ad anim enim ea labore irure. Quis nostrud quis ad est aliqua do anim deserunt ipsum id esse culpa.</p>
            </div>
            <div className='col-lg-6 col-md-12'>
              <img src={gardiennage1} alt='...' />
            </div>
          </div>
        </div>
      </div>

      <div className='sectionJardinage' id='service-jardinage'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <img src={jardinage1} alt='...' />
            </div>
            <div className='col-lg-6 col-md-12'>
              <p>Dolore esse amet ad in. Aute adipisicing esse magna esse pariatur excepteur amet. Laboris magna laborum fugiat ut exercitation ea. Id adipisicing dolore ullamco magna aute mollit duis aliquip ex mollit consequat fugiat. In consequat enim esse consequat nisi elit occaecat eu aliqua. Velit qui eiusmod nisi laboris deserunt consectetur.

                Dolore et ea culpa excepteur duis elit elit do irure sint. Voluptate magna aute ad voluptate. Nulla ad anim incididunt id est excepteur deserunt amet. Esse magna amet irure proident consectetur elit excepteur proident excepteur amet. Do veniam sint ex qui commodo amet commodo qui et ea. Laborum culpa officia ullamco deserunt nulla consectetur minim et Lorem do elit.

                Id dolor anim Lorem esse consequat cupidatat non quis voluptate eiusmod. Mollit cillum exercitation fugiat exercitation nulla laboris labore ad anim enim ea labore irure. Quis nostrud quis ad est aliqua do anim deserunt ipsum id esse culpa.</p>
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

export default Services