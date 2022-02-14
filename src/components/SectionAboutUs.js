import React from 'react'

function SectionAboutUs() {
  return (
    <div className='countainer' style={{padding: '20px', marginTop: '30px'}}>

      <div className='row'>

        <div className='col-sm-12 col-lg-6' style={{alignSelf: 'center'}}>

          <h2 style={{textAlign: 'center'}}><span style={{color: 'var(--main-color)'}}>AS.STONE</span> Maroc</h2>

        </div>

        <div className='col-sm-12 col-lg-6'>

          <div className="card" style={{ borderLeft: '5px solid var(--main-color)', borderTop: 0, borderBottom: 0, borderRight: 0}}>
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