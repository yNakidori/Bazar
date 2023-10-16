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
      button: 'https://www.nvidia.com/pt-br/'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1625633979481-bcbaa10165f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFkZW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      title: 'O MELHOR ECOMMERCE DE TECNOLOGIA DA REGIAO',
      description: 'OS MELHORES PRECOS DO MERCADO',
      button: 'https://www.amd.com/pt.html'
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
                  <button>VEJA AGORA</button>
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
