import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2765&q=80',
      title: 'O melhor da tecnologia',
      description: 'teste',
      button: 'https://www.google.com'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2765&q=80',
      title: 'O melhor da tecnologia',
      description: 'teste',
      button: 'https://www.google.com'
    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div className='bannerslider'>
      <Slider className='bannerslider' {...settings}>
        {
          data.map(item => {
            return(
              <div className='imagecont' key = {item.id}>
                <img src={item.image} alt= 'noimg'/>
                <div className='content'>
                  <h1>{item.title}</h1>
                  <span>{item.description}</span>
                  <button>Shop More</button>
                </div>
              </div>
            )
          })
        }
      </Slider>

    </div>
  )
}

export default BannerSlider;
