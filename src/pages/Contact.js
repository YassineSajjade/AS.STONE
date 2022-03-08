import React from 'react';
import NavbarC from '../components/NavbarC';
import '../styles/ContactP.css';
import { Link } from 'react-router-dom';
import SectionReferences from '../components/SectionReferences';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';

function Contact() {
  return (
    <>
      <NavbarC />

      <div className='sectionContactUs'>
        <div className='container'>

          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <h1>Contacter nous</h1>
            </div>
          </div>

          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/">Accueil</Link>
                </li>
                <li className="nav-item" id='liAfter'>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='sectionFormInfo'>
        <div className='container'>
          <div className='row'>

            <div className='column col-lg-6 col-md-12 col-sm-12'>

              <div className='inline'>
                <h4>Envoyez-nous un E-mail</h4>
              </div>
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Nom complet *</label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email *</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="mb-3">
                  <label for="sujet" class="form-label">Sujet *</label>
                  <input type="text" class="form-control" id="sujet" />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message *</label>
                  <textarea class="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-outline btnSubmit hvr-radial-out ">Envoyer</button>
              </form>

            </div>

            <div className='column col-lg-6 col-md-12 col-sm-12'>

              <div className='inline'>
                <h4>Information de contact</h4>
              </div>
              <div>
                <ul id='listContact'>
                  <li>
                    <strong>
                      <p><span>Adresse:</span> 34 bloc 118 étage magazin, lalla meriem - Casablanca</p>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <p><span>telephone:</span> 06 61 59 32 55</p>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <p><span>Email:</span> as.stone.maroc@gmail.com</p>
                    </strong>
                  </li>
                </ul>
              </div>

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

export default Contact