import React from 'react';
import Slider from 'react-slick';
import nettoyage1 from '../images/nettoyage/nettoyage1.jpg';
import gardiennage1 from '../images/gardiennage/gardiennage1.jpg';
import jardinage1 from '../images/jardinage/jardinage1.jpg';

function SectionReferences() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <div className='container' style={{ padding: '20px', marginTop: '60px' }}>

      <div className='row'>

        <div className='col-lg-2' style={{alignSelf: 'center'}}>
          <div style={{ backgroundColor: 'var(--main-color)', width: '5px', height: '45px', margin: '0 0 -47px'}}></div>
          <h3 style={{ 
            margin: '0 0 0 18px', 
            fontSize: '24px', 
            fontWeight: '800', 
            textTransform: 'uppercase', 
            lineHeight: '1em',
            color: 'var(--main-color)'}}>
            Nos Références
          </h3>
        </div>
        
        <div className='col-lg-10'>

          <Slider {...settings} className='slick'>
            <div>
              <img className="img-fluid rounded-start" src={nettoyage1}/>
            </div>
            <div>
              <img className="img-fluid rounded-start" src={gardiennage1}/>
            </div>
            <div>
              <img className="img-fluid rounded-start" src={jardinage1}/>
            </div>
            <div>
              <img className="img-fluid rounded-start" src={nettoyage1}/>
            </div>
            <div>
              <img className="img-fluid rounded-start" src={gardiennage1}/>
            </div>
            <div>
              <img className="img-fluid rounded-start" src={jardinage1}/>
            </div>
            <div>
              <img className="img-fluid rounded-start" src={nettoyage1}/>
            </div>
            <div>
              <img className="img-fluid rounded-start" src={gardiennage1}/>
            </div>
            <div>
              <img className="img-fluid rounded-start" src={jardinage1}/>
            </div>
          </Slider>

        </div>

      </div>

    </div>
  )
}

export default SectionReferences