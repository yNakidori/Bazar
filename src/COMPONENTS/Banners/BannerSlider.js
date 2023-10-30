import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      title: 'AS MELHORES MARCAS',
      description: 'COM GARANTIA E CONFIABILIDADE',
      buttonUrl: 'https://www.nvidia.com/pt-br/'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670',
      title: 'ACOMPANHE AS NOSSAS LIVES PARA OFERTAS EXCLUSIVAS',
      description: 'OS MELHORES PREÇOS DO MERCADO',
      buttonUrl: 'https://www.twitch.tv/redragonbrasil'
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
            return (
              <div className='imagecont' key={item.id}>
                <img src={item.image} alt='noimg' />
                <div className='content'>
                  <h1>{item.title}</h1>
                  <span>{item.description}</span>
                  <a href={item.buttonUrl} className="button">VEJA AGORA</a>
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
