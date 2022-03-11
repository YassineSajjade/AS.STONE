import React from 'react';
import '../styles/References.css';
import Slider from 'react-slick';
import refLogos from '../images/referencesLogos/RefLogos';
import ScrollAnimation from 'react-animate-on-scroll';

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='container' id='sectionReferences' >

      <div className='row'>

        <div className='col-sm-12 col-md-4 col-lg-2' id='ourRef'>
          <div id='ourRefBar'></div>
          <ScrollAnimation animateIn='animate__pulse' animateOnce={true} delay={0.5}>
            <h3>Nos Références</h3>
          </ScrollAnimation>
        </div>

        <div className='col-sm-12 col-md-8 col-lg-10' style={{ marginTop: '30px' }}>

          <Slider {...settings} className='slick'>
            {
              refLogos.map((logo, index) => {
                return(
                  <div key={index}>
                    <img className="img-fluid rounded-start" src={logo} alt='' />
                  </div>
                )
              })
            }
          </Slider>

        </div>

      </div>

    </div>
  )
}

export default SectionReferences