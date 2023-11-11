import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './BannerSlider.css';

const BannerSlider = () => {
  const abrirPopUp = (url) => {
    // Configurações da janela pop-up
    var configuracoes = 'height=100,width=100,top=500,left=500,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no';

    // Abrir a nova janela
    var janelaPopup = window.open(url, '_blank', configuracoes);

    // Minimizar a janela
    if (janelaPopup) {
      janelaPopup.blur();
      window.focus();
    }
  };

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
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    // Iniciar a auto-ciclagem após o componente ser montado
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000); // Avançar para o próximo slide a cada 5 segundos

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // Executar apenas uma vez

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Definir o tempo de auto-ciclagem em milissegundos (5 segundos neste exemplo)
  };

  return (
    <div className='bannerslider'>
      <Slider className='bannerslider' ref={sliderRef} {...settings}>
        {data.map(item => (
          <div className='imagecont' key={item.id}>
            <img src={item.image} alt='noimg' />
            <div className='content'>
              <h1>{item.title}</h1>
              <span>{item.description}</span>
              {/* Aplicar a função ao botão da Twitch e abrir em nova guia para o botão da Nvidia */}
              {item.buttonUrl.includes('twitch.tv') ? (
                <button onClick={() => abrirPopUp(item.buttonUrl)} className="button">
                  VEJA AGORA
                </button>
              ) : (
                <a href={item.buttonUrl} target="_blank" rel="noopener noreferrer" className="button">
                  VEJA AGORA
                </a>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
