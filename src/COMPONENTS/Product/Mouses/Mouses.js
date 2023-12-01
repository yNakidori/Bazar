import React from 'react';
import Navbar from '../../Navbar/Navbar';
import BannerSlider from '../../Banners/BannerSlider';
import HomeCategories from '../../Category/HomeCategories';
import Product_Sidebar from '../Product_Sidebar';
import Footer1 from '../../Footer/Footer1';
import Footer2 from '../../Footer/Footer2';
import ProductSlider from '../ProductSlider';
import ProductCard from '../ProductCard';
import Ire from '../../../ASSETS/IMAGES/marcas/akko/Ire.png';
import Diomedes from '../../../ASSETS/IMAGES/marcas/akko/Diomedes.png';
import Hero from '../../../ASSETS/IMAGES/marcas/akko/Hero.png';
import Product_Mouses from '../Product_Mouses';

const Mouses = () => {

  const products = [
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
  ];

  return (

    
    <div>

      <Navbar reloadnavbar={false}/>
      <BannerSlider/>
      <HomeCategories/>
      {/*<Product_Sidebar/>*/}
      <Product_Mouses/>
      <Footer1/>
      <div className='slidercont'>
        {/*<ProductSlider products={products} categoryname='Relacionados'/>*/}
      </div>
      <div className='slidercont'>
        <ProductSlider products={products} categoryname='Explore Mais'/>
      </div>
      <Footer2/>
    </div>
  );
};

export default Mouses;
