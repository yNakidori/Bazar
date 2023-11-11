import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import './Extrapages.css'

const About = () => {
  return (
    <div className='extrapage'>
        <Navbar/>
        <SingleBanner
        heading='Sobre a empresa'
        bannerimage='https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />

        <div className='pgleft pgcommon'>
            <img src='https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?dpr=2&h=200&w=120&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cHJvY2Vzc29yfGVufDB8fHx8MTY5OTY0Njg2NXww&ixlib=rb-4.0.3'/>
            
            <div>
                <h1>Nosso objetivo</h1>
                <p>Se você está procurando um computador sob medida, nossa equipe especializada em montagem de computadores estará mais do que feliz em ajudar. Trabalhamos de perto com você para entender suas necessidades específicas e orçamento, criando um sistema personalizado que atenda exatamente ao que você procura.</p>
            </div>
        </div>
        <div className='pgrigth pgcommon'>
            <img src='https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?dpr=2&h=200&w=120&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cHJvY2Vzc29yfGVufDB8fHx8MTY5OTY0Njg2NXww&ixlib=rb-4.0.3'/>
            
            <div>
                <h1>Nossos valores</h1>
                <p>Além disso, buscamos constantemente maneiras de tornar a tecnologia mais acessível financeiramente. Oferecemos diversas opções de pagamento e promoções regulares para garantir que você possa adquirir os produtos e serviços de que precisa sem comprometer seu orçamento.</p>
            </div>
        </div>
        
        <Footer1/>
        <Footer2/>

        </div>
  )
}

export default About