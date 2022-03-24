import React, { useState, useRef } from 'react';
import NavbarC from '../components/NavbarC';
import '../styles/ContactP.css';
import { Link } from 'react-router-dom';
import SectionReferences from '../components/SectionReferences';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';
import emailjs from '@emailjs/browser';
function Contact() {

  const form = useRef();
  const [statusNom, setStatusNom] = useState(false);
  const [statusSujet, setStatusSujet] = useState(false);
  const [statusEmail, setStatusEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState(false);

  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');

  const [checkDanger, setCheckDanger] = useState('none');
  const [checkSuccess, setCheckSuccess] = useState('none');
  const [checkNom, setCheckNom] = useState('');
  const [checkEmail, setCheckEmail] = useState('');
  const [checkSujet, setCheckSujet] = useState('');
  const [checkMessage, setCheckMessage] = useState('');

  const handleName = (e) => {
    if (e.target.value.length < 3) {
      setCheckNom('is-invalid');
      setNom(e.target.value);
      setStatusNom(false);
    } else {
      setCheckNom('is-valid');
      setNom(e.target.value);
      setStatusNom(true);
    }
  }

  const handleEmail = (e) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(e.target.value) === true) {
      setCheckEmail('is-valid');
      setEmail(e.target.value);
      setStatusEmail(true);
    } else {
      setCheckEmail('is-invalid');
      setEmail(e.target.value);
      setStatusEmail(false);
    }
  }

  const handleSujet = (e) => {
    if (e.target.value.length < 3) {
      setCheckSujet('is-invalid');
      setSujet(e.target.value);
      setStatusSujet(false);
    } else {
      setCheckSujet('is-valid');
      setSujet(e.target.value);
      setStatusSujet(true);
    }
  }

  const handleMessqge = (e) => {
    if (e.target.value.length < 3) {
      setCheckMessage('is-invalid');
      setMessage(e.target.value);
      setStatusMessage(false);
    } else {
      setCheckMessage('is-valid');
      setMessage(e.target.value);
      setStatusMessage(true);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (nom === '' && email === '' && sujet === '' && message === '') {
      setCheckDanger('block');
      setCheckNom('is-invalid');
      setCheckEmail('is-invalid');
      setCheckSujet('is-invalid');
      setCheckMessage('is-invalid');
    } else {
      if (statusNom === true && statusEmail === true && statusSujet === true && statusMessage === true) {
        emailjs.sendForm('service_h2igikg', 'template_du8w6bp', form.current, 'mHbUeNt38wsZTPlT_')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        resetAll(e);
        setCheckSuccess('block');
        // console.log(e);

      }
    }
  }

  const resetAll = (e) => {
    setNom('');
    setEmail('');
    setSujet('');
    setMessage('');

    setCheckDanger('none');
    setCheckNom('');
    setCheckEmail('');
    setCheckSujet('');
    setCheckMessage('');

    setStatusNom(false);
    setStatusEmail(false);
    setStatusSujet(false);
    setStatusMessage(false);

    e.target.reset();

    disappearAlert();
  }

  const disappearAlert = () => {
    setTimeout(() => {
      setCheckSuccess('none');
    }, 2000)
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

              <div className="alert alert-danger" role="alert" style={{ display: checkDanger }}>
                Ces champs sont obligatoire !!
              </div>

              <div className="alert alert-success" role="alert" style={{ display: checkSuccess }}>
                Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais !
              </div>

              <form ref={form} onSubmit={sendEmail} id='from'>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom complet *</label>
                  <input type="text" className={`form-control ${checkNom} `} id="nom" name='nom' aria-describedby="nomFeedback" onChange={handleName} />
                  <div id="nomFeedback" className="invalid-feedback">
                    le nom doit étre au moins 3 letters.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input type="text" className={`form-control ${checkEmail} `} id="email" name='email' aria-describedby='emailFeedback' onChange={handleEmail} />
                  <div id="emailFeedback" className="invalid-feedback">
                    le email doit étre valide.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="sujet" className="form-label">Sujet *</label>
                  <input type="text" className={`form-control ${checkSujet} `} id="sujet" name='sujet' aria-describedby='sujetFeedback' onChange={handleSujet} />
                  <div id="sujetFeedback" className="invalid-feedback">
                    le sujet doit étre au moins 3 letters.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea className={`form-control ${checkMessage} `} id="message" name='message' rows="3" aria-describedby='messageFeedback' onChange={handleMessqge} />
                  <div id="messageFeedback" className="invalid-feedback">
                    le message doit étre au moins 3 letters.
                  </div>
                </div>
                <button type="submit" className="btn btn-outline btnSubmit">Envoyer</button>
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
                      <p><span>telephone:</span> +212 612-787880</p>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <p><span>Email:</span> nfo.services.maroc@gmail.com</p>
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