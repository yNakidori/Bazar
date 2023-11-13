import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import img1 from '../../ASSETS/IMAGES/giftcards/ps3.jpg'
import img2 from '../../ASSETS/IMAGES/giftcards/ps2.jpg'
import img3 from '../../ASSETS/IMAGES/giftcards/ps1.jpg'
import img4 from '../../ASSETS/IMAGES/giftcards/x1.jpg'
import img5 from '../../ASSETS/IMAGES/giftcards/x2.jpg'
import img6 from '../../ASSETS/IMAGES/giftcards/x3.jpg'
import img7 from '../../ASSETS/IMAGES/giftcards/n1.jpg'
import img8 from '../../ASSETS/IMAGES/giftcards/n2.jpg'
import img9 from '../../ASSETS/IMAGES/giftcards/n3.jpg'
import ProductSlider from '../../COMPONENTS/Product/ProductSlider'

const Home = () => {
  const products = [
    {
      id:1,
      productimage: img1,
      productname: 'PlayStation Gift Card',
      productprice: 100,
      counttype: 'Uma chave de ativação',
      discountprecent: 12,
    },
    {
      id:2,
      productimage: img2,
      productname: 'PlayStation Gift Card',
      productprice: 200,
      counttype: 'Uma chave de ativação',
      discountprecent: 12,
    },
    {
      id:3,
      productimage: img3,
      productname: 'PlayStation Gift Card',
      productprice: 300,
      counttype: 'Uma chave de ativação',
      discountprecent: 12,
    },
    {
      id:4,
      productimage: img4,
      productname: 'Xbox Gift Card',
      productprice: 100,
      counttype: 'Uma chave de ativação',
      discountprecent: 11,
    },
    {
      id:5,
      productimage: img5,
      productname: 'Xbox Gift Card',
      productprice: 200,
      counttype: 'Uma chave de ativação',
      discountprecent: 11,
    },
    {
      id:6,
      productimage: img6,
      productname: 'Xbox Gift Card',
      productprice: 300,
      counttype: 'Uma chave de ativação',
      discountprecent: 11,
    },
    {
      id:7,
      productimage: img7,
      productname: 'Nintendo Gift Card',
      productprice: 100,
      counttype: 'Uma chave de ativação',
      discountprecent: 9,
    },
    {
      id:8,
      productimage: img8,
      productname: 'Nintendo Gift Card',
      productprice: 250,
      counttype: 'Uma chave de ativação',
      discountprecent: 9,
    },
    {
      id:9,
      productimage: img9,
      productname: 'Nintendo Gift Card',
      productprice: 300,
      counttype: 'Uma chave de ativação',
      discountprecent: 9,
    },
  ]
  return (
    <div>
        <Navbar reloadnavbar={false}/>
        <BannerSlider/>
        <HomeCategories/>
        <Product_Sidebar/>
        <Footer1/>
        <div className='slidercont'>
      <ProductSlider products={products} categoryname='Relacionados'/>
     </div>
     <div className='slidercont'>
      <ProductSlider products={products} categoryname='Explore Mais'/>
     </div>
        <Footer2/>
        </div>
  )
}

export default Home