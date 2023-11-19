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
      "ProductId": 1,
      "ProductName": "Product 1",
      "ProductDescription": "Leve a experiência de jogo e entretenimento para um novo nível com o Gift Card PSN. Este cartão é a chave para um vasto universo de conteúdo digital, permitindo que você explore jogos incríveis, filmes emocionantes e músicas envolventes diretamente na sua plataforma PlayStation.Recarregue sua carteira virtual com o Gift Card PSN e desfrute da liberdade de escolher entre uma ampla variedade de jogos, pacotes de expansão, filmes, programas de TV e músicas. Personalize sua experiência de entretenimento de acordo com seus gostos e preferências. Além disso, o Gift Card PSN é o presente perfeito para os amantes de jogos em sua vida. Deixe que eles escolham o que desejam, seja um novo título de sucesso, um filme blockbuster ou a trilha sonora perfeita para suas sessões de jogo. Não perca a oportunidade de proporcionar momentos inesquecíveis de diversão digital. Adquira seu Gift Card PSN agora e abra as portas para um mundo de entretenimento sem limites.",
      "productImage": [
        {
          id : 1,
          image : img1
        },
        {
          id : 2,
          image : img2
        },
        {
          id : 3,
          image : img3
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
      "ProductPrice": 100,
      "SalesPrice": 80,
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
        },
        {
          "ReviewId": 1,
          "Name": "Name 1",
          "Email": "",
          "Rating": 1,
          "Date": "2021-07-01T00:00:00",
          "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        }
      ]
    },
    {
      "ProductId": 1,
      "ProductName": "Product 1",
      "ProductDescription": "Leve a experiência de jogo e entretenimento para um novo nível com o Gift Card PSN. Este cartão é a chave para um vasto universo de conteúdo digital, permitindo que você explore jogos incríveis, filmes emocionantes e músicas envolventes diretamente na sua plataforma PlayStation.Recarregue sua carteira virtual com o Gift Card PSN e desfrute da liberdade de escolher entre uma ampla variedade de jogos, pacotes de expansão, filmes, programas de TV e músicas. Personalize sua experiência de entretenimento de acordo com seus gostos e preferências. Além disso, o Gift Card PSN é o presente perfeito para os amantes de jogos em sua vida. Deixe que eles escolham o que desejam, seja um novo título de sucesso, um filme blockbuster ou a trilha sonora perfeita para suas sessões de jogo. Não perca a oportunidade de proporcionar momentos inesquecíveis de diversão digital. Adquira seu Gift Card PSN agora e abra as portas para um mundo de entretenimento sem limites.",
      "productImage": [
        {
          id : 1,
          image : img1
        },
        {
          id : 2,
          image : img2
        },
        {
          id : 3,
          image : img3
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
      "ProductPrice": 100,
      "SalesPrice": 80,
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
        },
        {
          "ReviewId": 1,
          "Name": "Name 1",
          "Email": "",
          "Rating": 1,
          "Date": "2021-07-01T00:00:00",
          "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        }
      ]
    }
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