import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../ASSETS/IMAGES/giftcards/ps3.jpg'
import img2 from '../../ASSETS/IMAGES/giftcards/ps2.jpg'
import img3 from '../../ASSETS/IMAGES/giftcards/ps1.jpg'
import img4 from '../../ASSETS/IMAGES/giftcards/x1.jpg'
import img5 from '../../ASSETS/IMAGES/giftcards/x2.jpg'
import img6 from '../../ASSETS/IMAGES/giftcards/x3.jpg'
import img7 from '../../ASSETS/IMAGES/giftcards/n1.jpg'
import img8 from '../../ASSETS/IMAGES/giftcards/n2.jpg'
import img9 from '../../ASSETS/IMAGES/giftcards/n3.jpg'
import './AllProduct.css'

const AllProduct = () => {
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
    <div className='allproducts'>
      <h1>All Products</h1>
      <div className='products'>
        {
          products.map((item) => {
            return(
              <ProductCard data={item} key={item.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct