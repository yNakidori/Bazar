import React from 'react'
import ProductCard from '../ProductCard'
import '../../Product/AllProduct.css'
import Cobra from '../../../ASSETS/IMAGES/marcas/akko/Cobra.png'
import Inspiriti from '../../../ASSETS/IMAGES/marcas/akko/Inspirit.png'
import King from '../../../ASSETS/IMAGES/marcas/akko/KingCobra.png'
import Memealion from '../../../ASSETS/IMAGES/marcas/akko/Memealion.png'
import Viper from '../../../ASSETS/IMAGES/marcas/akko/Signature.png'

const AllMouses = () => {
  const products = [
    {
        "ProductId": 19,
        "ProductName": "Redragon Cobra",
        "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
        "productImage": [
          {
            id : 1,
            image : Cobra
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
        "ProductPrice": 380,
        "SalesPrice": 304,
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
        "ProductId": 20,
        "ProductName": "Redragon Inspiriti",
        "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
        "productImage": [
          {
            id : 1,
            image : Inspiriti
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
        "ProductPrice": 260,
        "SalesPrice": 208,
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
        "ProductId": 20,
        "ProductName": "Redragon king Cobra",
        "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
        "productImage": [
          {
            id : 1,
            image : King
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
        "ProductPrice": 400,
        "SalesPrice": 320,
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
        "ProductId": 21,
        "ProductName": "Redragon Memealion",
        "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
        "productImage": [
          {
            id : 1,
            image : Memealion
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
        "ProductPrice": 300,
        "SalesPrice": 240,
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
        "ProductId": 22,
        "ProductName": "Razer Viper Signature",
        "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
        "productImage": [
          {
            id : 1,
            image : Viper
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
        "ProductPrice": 2500,
        "SalesPrice": 2000,
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
      <h1>MOUSES</h1>
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

export default AllMouses