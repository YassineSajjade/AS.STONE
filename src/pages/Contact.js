import React, { useState } from 'react';
import NavbarC from '../components/NavbarC';
import '../styles/ContactP.css';
import { Link } from 'react-router-dom';
import SectionReferences from '../components/SectionReferences';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';

function Contact() {

  const [check, setCheck] = useState('none');
  const [checkNom, setCheckNom] = useState('');
  const [checkEmail, setCheckEmail] = useState('');
  const [checkSujet, setCheckSujet] = useState('');
  const [checkMessage, setCheckMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const nom = e.target.nom.value;
    const email = e.target.email.value;
    const sujet = e.target.sujet.value;
    const message = e.target.message.value;

    if (nom === '' && email === '' && sujet === '' && message === '') {
      setCheck('block');
      setCheckNom('is-invalid');
      setCheckEmail('is-invalid');
      setCheckSujet('is-invalid');
      setCheckMessage('is-invalid');
    } else {
      setCheck('none');
      if (nom.length > 2 ) {
        setCheckNom('is-valid');
      }
      if (email.length > 2 ) {
        setCheckEmail('is-valid');
      }
      if (sujet.length > 2 ) {
        setCheckSujet('is-valid');
      }
      if (message.length > 2 ) {
        setCheckMessage('is-valid');
      }
    }
    console.log(nom+'/'+email+'/'+sujet+'/'+message)
  }

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

              <div className="alert alert-danger" role="alert" style={{ display: check }}>
                Ces champs sont obligatoire !!
              </div>

              <form onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom complet *</label>
                  <input type="text" className={`form-control ${checkNom} `} id="nom" aria-describedby="nomFeedback" />
                  <div id="nomFeedback" className="invalid-feedback">
                    le nom doit étre au moins 3 letters.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input type="email" className={`form-control ${checkEmail} `} id="email" aria-describedby='emailFeedback'/>
                  <div id="emailFeedback" className="invalid-feedback">
                    le email doit étre valide.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="sujet" className="form-label">Sujet *</label>
                  <input type="text" className={`form-control ${checkSujet} `} id="sujet" aria-describedby='sujetFeedback'/>
                  <div id="sujetFeedback" className="invalid-feedback">
                    le sujet doit étre au moins 3 letters.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea className={`form-control ${checkMessage} `} id="message" rows="3" aria-describedby='messageFeedback'/>
                  <div id="messageFeedback" className="invalid-feedback">
                    le message doit étre au moins 3 letters.
                  </div>
                </div>
                <button type="submit" className="btn btn-outline btnSubmit hvr-radial-out ">Envoyer</button>
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

      <SectionReferences />
      <Footer />
      <CopyRight />

    </>
  )
}

export default Contact