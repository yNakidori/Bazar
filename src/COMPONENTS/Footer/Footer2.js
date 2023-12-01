import React from 'react'
import logo from '../../ASSETS/logo.png'
import pagamento from '../../ASSETS/IMAGES/footer/pagamento.png'
import social from '../../ASSETS/IMAGES/footer/social.png'
import './Footer2.css'

const Footer2 = () => {
  return (
    <div className='footer'>
      <div className='footerin1'>
        <div className='ft1'>
          <img src={logo} alt='logo' className='logo' />
          <p>
             
          </p>
          <img src={social} alt='social' className='social' />

        </div>
        <div className='ft2'>
          <h3>Sobre</h3>
          <p>Quem somos</p>
          <p>Contato</p>
          <p>Sobre a equipe</p>
          <p>Suporte ao cliente</p>
        </div>
        <div className='ft2'>
        <h3>Informacao adicional</h3>
          <p>Politica de privacidade</p>
          <p>Termos e condicoes</p>
          <p>Politicas de devolucao</p>
          <p>Mapa do site</p>
        </div>
        <div className='ft2'>
        <h3>Minha conta</h3>
          <p>Minha conta</p>
          <p>Historico de pedidos</p>
          <p>Lista de desejos</p>
          <p>Mais opcoes</p>
        </div>
        <div className='ft2'>
        <h3>Assine as novidades</h3>
          <p>Receba as maiores novidades primeiro por aqui!</p>
          <div className='inputcontainer'>
            <span className='icon1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
</svg>
</span>
            <input type='text' placeholder='Digite seu email' />
            <span className='icon2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</span>
          </div>
        </div>
      </div>
      <div className='footerin2'>
        <h3>@ Copyright 2023 Nakis Bazar, Inc. Todos os direitos reservados</h3>
        <img src={pagamento} alt='pagamento' />
      </div>
    </div>
  )
}

export default Footer2