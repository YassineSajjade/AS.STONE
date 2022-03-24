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
              <p>Nos agents de nettoyage, s'occupent de la propreté de tous vos locaux :</p>
              <ul>
                <li>Nettoyage industriel</li>
                <li>Nettoyage de bureau</li>
                <li>Nettoyage des commerces et grandes surfaces</li>
                <li>Nettoyage de parkings</li>
                <li>Nettoyage chez les particuliers</li>
                <li>Nettoyage des vitres</li>
                <li>Remise en état tout sol- décapage, mise en cire, Shampooing moquettes</li>
                <li>Aménagements et finitions</li>
                <li>Service hygiène (papier hygiénique, essuie-mains, savon)</li>
              </ul>
              <p>En qualité de prestataire de services, nous mettons tout en oeuvre pour apporter à nos clients le meilleur, nous sommes garants de la confiance qu'ils nous accordent.</p>
              <p>Cette responsabilité nous impose:</p>
              <ul>
                <li>- La persévérance et la discrétion.</li>
                <li>- La réactivité et la disponibilité.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='sectionGardiennage' id='service-gardiennage'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <p>Nos sommes particulièrement vigilants à rendre vos biens moins vulnérables. Parce que la sécurité est avant tout une affaire de vigilance humaine <br />
                NFO-SERVICES Securité ment en place chez vous des équipes d'agents de surveillance aux compétences spécifiques.
              </p>
              <span>Efficacité, discrétion, dissuasion, responsabilisation.</span>
              <p>Selon la nature de vos sites et les niveaux de sécurité requis, NFO-SERVICES Sécurité apporte des solutions opérantes:</p>
              <ul>
                <li>Surveillance statique des lieux.</li>
                <li>Accueil, filtrage, contrôle d'accès, assistance aux visiteurs.</li>
                <li>Rondes à vue diurnes et/ou nocturne, avec ou sans chien.</li>
                <li>Ouverture et fermeture des locaux.</li>
                <li>Vérification des installations et systèmes de sécurité.</li>
                <li>Maintenance d'une main-courante.</li>
                <li>Contrôle des badges d'accès</li>
                <li>Surveillance des sites contre intrusions malveillantes.</li>
                <li>Protection les biens et des personnes.</li>
                <li>Surveillance des engins et matériels de chantiers.</li>
                <li>Surveillance des sites inoccupés.</li>
              </ul>
              <span>EVENEMENTIEL</span>
              <p>Pour assurer le bon déroulement de votre manifestation, qu'il soit sportif, culturel, officiel, Institutionnel, la réussite de votre événement passe aussi par sa sécurité. NFO-SERVICES Sécurité vous dédie des équipes parfaitement rodées ou conscience professionnelle, maîtrise, rigueur vont de pair avec efficacité et discrétion.<br />
                Des prestations au service de la sécurité et de votre image de marque de la prestation la plus simple à la plus sophistiquée, NFO-SERVICES Sécurité accompagne vos événements privés ou publics et assure la protection de vos invites.
              </p>
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
              <p>Professionnel dans le Jardinage et l'Entretien des Espaces Verts</p>
              <p>
                les Jardiniers spécialisés de NFO-SERVICES interviennent selon un planning défini pour réaliser tailles, tontes et traitements spécifiques verts.<br />
                afin de conserver vos espaces verts, jardins et terrasses en bon état tout au long de l'année selon vos besoins et vos disponibilités.
              </p>
              <span>Nos domaines d'activité :</span>
              <ul>
                <li>Tonte de pelouse</li>
                <li>Taille des arbres, taille des haies et de tous végétaux.</li>
                <li>Binage, désherbage, Ramassage des feuilles</li>
                <li>Traitement phytosanitaire.</li>
                <li>Renouvellement de la terre, apport d'engrais.</li>
                <li>Plantations fleurs, arbustes et arbres</li>
                <li>Traitement des allées et terrasses. • Entretien des clôtures et bordures.</li>
                <li>Entretien des clôtures et bordures.</li>
                <li>Nettoyage des chéneaux...</li>
              </ul>
              <p>Nous travaillons pour toutes les entreprises ou les particuliers.</p>
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

export default Services