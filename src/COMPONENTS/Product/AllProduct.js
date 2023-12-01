import React from 'react'
import ProductCard from './ProductCard'
import akkoro1 from '../../ASSETS/IMAGES/marcas/akko/rosecap1.png'
import akkoma1 from '../../ASSETS/IMAGES/marcas/akko/matchacap1.png'
import akkooc1 from '../../ASSETS/IMAGES/marcas/akko/ocean1.png'
import akkocry1 from '../../ASSETS/IMAGES/marcas/akko/akkocry1.png'
import akkored1 from '../../ASSETS/IMAGES/marcas/akko/akkored1.png'
import akkowine1 from '../../ASSETS/IMAGES/marcas/akko/akkowine1.png'
import akkodemon from '../../ASSETS/IMAGES/marcas/akko/akkodemon.png'
import akkocream from '../../ASSETS/IMAGES/marcas/akko/cream.png'
import fuma from '../../ASSETS/IMAGES/marcas/akko/fuma.png'
import kotetsu from '../../ASSETS/IMAGES/marcas/akko/kotetsu.png'
import shuriken from '../../ASSETS/IMAGES/marcas/akko/shuriken.png'
import Boreas from '../../ASSETS/IMAGES/marcas/akko/Boreas.png'
import Chione from '../../ASSETS/IMAGES/marcas/akko/Chione P3.png'
import Zeus from '../../ASSETS/IMAGES/marcas/akko/Zeus.png'
import Diomedes from '../../ASSETS/IMAGES/marcas/akko/Diomedes.png'
import Hero from '../../ASSETS/IMAGES/marcas/akko/Hero.png'
import Ire from '../../ASSETS/IMAGES/marcas/akko/Ire.png'
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
          image : akkoro1
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
          image : akkoma1
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
      "ProductPrice": 170,
      "SalesPrice": 130,
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
      "ProductId": 3,
      "ProductName": "Switch Akko CS Ocean",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : akkooc1
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
      "ProductPrice": 170,
      "SalesPrice": 130,
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
      "ProductId": 4,
      "ProductName": "Switch Akko CS Crystal",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : akkocry1
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
      "ProductPrice": 170,
      "SalesPrice": 130,
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
      "ProductId": 5,
      "ProductName": "Switch Akko CS Red",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : akkored1
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
      "ProductPrice": 190,
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
      "ProductId": 6,
      "ProductName": "Switch Akko CS Wine",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : akkowine1
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
      "ProductPrice": 190,
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
      "ProductId": 7,
      "ProductName": "Switch Akko CS Demon",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : akkodemon
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
      "ProductPrice": 220,
      "SalesPrice": 160,
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
      "ProductId": 8,
      "ProductName": "Switch Akko CS Demon",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : akkocream
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
      "ProductPrice": 220,
      "SalesPrice": 160,
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
      "ProductId": 9,
      "ProductName": "Switch Akko CS POM",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : akkocry1
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
      "ProductPrice": 170,
      "SalesPrice": 130,
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
      "ProductId": 10,
      "ProductName": "Scythe Fuma 3",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : fuma
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
      "ProductPrice": 563,
      "SalesPrice": 462,
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
      "ProductId": 11,
      "ProductName": "Kotetsu 3",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : kotetsu
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
      "ProductPrice": 500,
      "SalesPrice": 400,
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
      "ProductId": 12,
      "ProductName": "Shuriken 3",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : shuriken
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
      "ProductPrice": 650,
      "SalesPrice": 520,
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
      "ProductId": 13,
      "ProductName": "Gamdias Boreas",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : Boreas
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
      "ProductPrice": 650,
      "SalesPrice": 520,
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
      "ProductId": 14,
      "ProductName": "Gamdias Chione P3",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : Chione
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
      "ProductPrice": 1100,
      "SalesPrice": 880,
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
      "ProductId": 15,
      "ProductName": "Redragon Zeus Pro",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : Zeus
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
      "ProductId": 16,
      "ProductName": "Redragon Ire Pro",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : Ire
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
      "ProductPrice": 420,
      "SalesPrice": 336,
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
      "ProductId": 17,
      "ProductName": "Redragon Diomedes",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : Diomedes
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
      "ProductId": 18,
      "ProductName": "Redragon Hero",
      "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
      "productImage": [
        {
          id : 1,
          image : Hero
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
  ]

  return (
    <div className='allproducts'>
      <h1>NOVIDADES DAS MARCAS</h1>
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