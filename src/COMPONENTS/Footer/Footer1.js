import React from 'react'
import foot from '../../ASSETS/IMAGES/footer/foot.jpg'
import './Footer1.css'

const Footer1 = () => {
  return (
    <div className='footer1'>
        <div className='left'>
            <img src={foot} alt='foot'/>
        </div>
        <div className='right'>
            <h1>
                Receba as maiores novidades primeiro por aqui!
            </h1>
            <p>
                Contamos com parcerias exclusivas para voce encontrar as novidades primeiro conosco!
            </p>
        </div>
    </div>
  )
}

export default Footer1