import React from 'react'
import ProductCard from '../ProductCard'
import '../../Product/AllProduct.css'
import ashe from '../../../ASSETS/IMAGES/marcas/akko/Ashe.png'
import dark from '../../../ASSETS/IMAGES/marcas/akko/darkavenger.png'
import born from '../../../ASSETS/IMAGES/marcas/akko/dragonborn.png'
import kumara from '../../../ASSETS/IMAGES/marcas/akko/kumarapro.png'
import magic from '../../../ASSETS/IMAGES/marcas/akko/magicwand.png'
import horus from '../../../ASSETS/IMAGES/marcas/akko/horus.png'

const AllTeclados = () => {
  const products = [
    {
      "ProductId": 23,
      "ProductName": "Redragon Ashe",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : ashe
        },
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
      "ProductPrice": 310,
      "SalesPrice": 248,
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
    "ProductId": 24,
    "ProductName": "Redragon Dark Avenger",
    "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
    "productImage": [
      {
        id : 1,
        image : dark
      },
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
    "ProductPrice": 340,
    "SalesPrice": 272,
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
  "ProductId": 25,
  "ProductName": "Redragon Kumara",
  "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
  "productImage": [
    {
      id : 1,
      image : kumara
    },
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
  "ProductPrice": 340,
  "SalesPrice": 272,
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
  "ProductId": 26,
  "ProductName": "Redragon Horus",
  "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
  "productImage": [
    {
      id : 1,
      image : horus
    },
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
  "ProductPrice": 370,
  "SalesPrice": 296,
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
  "ProductId": 27,
  "ProductName": "Redragon Magic Wand",
  "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
  "productImage": [
    {
      id : 1,
      image : magic
    },
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
  "ProductPrice": 450,
  "SalesPrice": 360,
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
  "ProductId": 27,
  "ProductName": "Redragon Dragonborn",
  "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
  "productImage": [
    {
      id : 1,
      image : born
    },
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
  "ProductPrice": 250,
  "SalesPrice": 200,
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
   
  ]

  return (
    <div className='allproducts'>
      <h1>TECLADOS</h1>
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

export default AllTeclados