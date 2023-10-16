import React from 'react'
import './HomeCategories.css'
import ft1 from '../../ASSETS/ft1.png'
import ft2 from '../../ASSETS/ft2.png'
import ft3 from '../../ASSETS/ft3.png'
import ft4 from '../../ASSETS/ft4.png'

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src = {ft1} alt = 'ft1'/>      
        <div className='content'>
          <h1>
            REDRAGON
          </h1>
          <p>
            NETWORK
          </p>
        </div>
      </div>
      <div className='container'>
        <img src = {ft2} alt = 'ft2'/>
        <div className='content'>
          <h1>
            SCYTHE
          </h1>
          <p>
            COOLING
          </p>
        </div>
      </div>
      <div className='container'>
        <img src = {ft3} alt = 'ft3'/>
        <div className='content'>
          <h1>
            GAMDIAS
          </h1>
          <p>
            PERFORMANCE
          </p>
        </div>
      </div>
      <div className='container'>
        <img src = {ft4} alt = 'ft4'/>
        <div className='content'>
          <h1>
            AKKO
          </h1>
          <p>
            CUSTOM
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeCategories