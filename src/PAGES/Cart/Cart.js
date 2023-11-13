import React from 'react'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'

const Cart = () => {
  return (
    <div>
      <Navbar/>
      <SingleBanner
        heading='Meu carrinho'
        bannerimage='https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default Cart