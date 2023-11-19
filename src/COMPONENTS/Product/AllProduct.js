import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../ASSETS/IMAGES/giftcards/ps3.jpg'
import img2 from '../../ASSETS/IMAGES/giftcards/ps2.jpg'
import img3 from '../../ASSETS/IMAGES/giftcards/ps1.jpg'
import akko1 from '../../ASSETS/IMAGES/marcas/akko/rose1.png'
import akko2 from '../../ASSETS/IMAGES/marcas/akko/rose2.png'
import akko3 from '../../ASSETS/IMAGES/marcas/akko/rose3.png'
import akko4 from '../../ASSETS/IMAGES/marcas/akko/rose4.png'
import akko5 from '../../ASSETS/IMAGES/marcas/akko/rose5.png'
import akko6 from '../../ASSETS/IMAGES/marcas/akko/matcha1.png'
import akko7 from '../../ASSETS/IMAGES/marcas/akko/matcha2.png'
import akko8 from '../../ASSETS/IMAGES/marcas/akko/matcha3.png'
import akko9 from '../../ASSETS/IMAGES/marcas/akko/matcha4.png'
import akko10 from '../../ASSETS/IMAGES/marcas/akko/matcha5.png'

import './AllProduct.css'

const AllProduct = () => {
  const products = [

    {
      "ProductId": 1,
      "ProductName": "Switch Akko CS Rose",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : akko1
        },
        {
          id : 2,
          image : akko2
        },
        {
          id : 3,
          image : akko3
        },
        {
          id : 4,
          image : akko4
        },
        {
          id : 5,
          image : akko5
        }
      ],
      "ProductCode": "P1",
      "ProductCategory": "Category 1",
      "ProductSubCategory": "Sub Category 1",
      "ProductBrand": "Brand 1",
      "ProductColor": "Color 1",
      "ProductSize": "Size 1",
      "ProductWeight": "Weight 1",
      "ProductMaterial": "Material 1",
      "ProductQuantity": 10,
      "ProductUnit": "Unit 1",
      "ProductPrice": 180,
      "SalesPrice": 140,
      "ProductDiscount": 20,
      "ProductDiscountType": "Percentage",
      "ProductTax": 20,
      "ProductTaxType": "Percentage",
      "ProductShippingCharge": 20,
      "ProductShippingChargeType": "Percentage",
      "ProductShippingTime": "1-2 days",
      "ProductShippingTimeType": "Days",
      "ProductShippingLocation": "Location 1",
      "ProductShippingLocationType": "Country",
      "ProductShippingReturnPolicy": "Return Policy 1",
      "ProductShippingReturnPolicyType": "Days",
      "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
      "ProductShippingReturnPolicyDescriptionType": "Days",
      "ProductReviews": [
        {
          "ReviewId": 1,
          "Name": "Name 1",
          "Email": "",
          "Rating": 4,
          "Date": "2021-07-01T00:00:00",
          "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        }
      ]
    },
    {
      "ProductId": 2,
      "ProductName": "Switch Akko CS Green",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : akko6
        },
        {
          id : 2,
          image : akko7
        },
        {
          id : 3,
          image : akko8
        },
        {
          id : 4,
          image : akko9
        },
        {
          id : 5,
          image : akko10
        }
      ],
      "ProductCode": "P2",
      "ProductCategory": "Category 1",
      "ProductSubCategory": "Sub Category 1",
      "ProductBrand": "Brand 1",
      "ProductColor": "Color 1",
      "ProductSize": "Size 1",
      "ProductWeight": "Weight 1",
      "ProductMaterial": "Material 1",
      "ProductQuantity": 10,
      "ProductUnit": "Unit 1",
      "ProductPrice": 170,
      "SalesPrice": 140,
      "ProductDiscount": 20,
      "ProductDiscountType": "Percentage",
      "ProductTax": 20,
      "ProductTaxType": "Percentage",
      "ProductShippingCharge": 20,
      "ProductShippingChargeType": "Percentage",
      "ProductShippingTime": "1-2 days",
      "ProductShippingTimeType": "Days",
      "ProductShippingLocation": "Location 1",
      "ProductShippingLocationType": "Country",
      "ProductShippingReturnPolicy": "Return Policy 1",
      "ProductShippingReturnPolicyType": "Days",
      "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
      "ProductShippingReturnPolicyDescriptionType": "Days",
      "ProductReviews": [
        {
          "ReviewId": 1,
          "Name": "Name 1",
          "Email": "",
          "Rating": 4,
          "Date": "2021-07-01T00:00:00",
          "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        }
      ]
    }
  ]
  return (
    <div className='allproducts'>
      <h1>NOVIDADES DA LOJA</h1>
      <div className='products'>
        {
          products.map((item,index) => {
            return(
              <ProductCard data={item} key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct