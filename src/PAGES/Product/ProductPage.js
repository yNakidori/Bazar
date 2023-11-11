import React, { useEffect } from 'react'
import {Link, useParams } from 'react-router-dom'
import img1 from '../../ASSETS/IMAGES/giftcards/ps3.jpg'
import img2 from '../../ASSETS/IMAGES/giftcards/ps2.jpg'
import img3 from '../../ASSETS/IMAGES/giftcards/ps1.jpg'
import img4 from '../../ASSETS/IMAGES/giftcards/x1.jpg'
import img5 from '../../ASSETS/IMAGES/giftcards/x2.jpg'
import img6 from '../../ASSETS/IMAGES/giftcards/x3.jpg'
import img7 from '../../ASSETS/IMAGES/giftcards/n1.jpg'
import img8 from '../../ASSETS/IMAGES/giftcards/n2.jpg'
import img9 from '../../ASSETS/IMAGES/giftcards/n3.jpg'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import ProductSlider from '../../COMPONENTS/Product/ProductSlider'
import './ProductPage.css'


const ProductPage = () => {
  const {prodid} = useParams()
  const [imageset, setimageset] = React.useState(null)
  const [productdata, setproductdata] = React.useState([])
  const [activeimg, setactiveimg] = React.useState({})
  const [count, setcount] = React.useState(1)
  const[showreview, setshowreview] = React.useState(false)

  const getproductdatabyid = async () =>{
    let temp = {
      "Code": 200,
      "Message": "Success",
      "Data": [
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
    }

    if(temp.Code == 200){
      setimageset(temp.Data[0].productImage)
      setproductdata(temp.Data[0])
      setactiveimg(temp.Data[0].productImage[0])
    }
  }


  useEffect(() => {
    getproductdatabyid()
    window.scrollTo(0, 0)
  },[])

  const [rating, setrating] = React.useState(0)

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
    <div className='productpage'>
      {

      }
      <Navbar/>

      <div className='pc1'>
        <Link to='/'>
          <button className='goback'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    VOLTAR
          </button>
        </Link>

        <div className='c11'>
          <div className='imgset'>
            {
              imageset && imageset?.map((item, index) => {
                return(
                  <div className='imgsmall' onClick={() => {
                    setactiveimg(item)
                  }}>
                    <img src={item.image} alt="" className={activeimg.id == item.id ? 'active' : ''}/>
                  </div>
                )
              })
            }
          </div>
          <div className='imgbig'>
            <img src={activeimg.image} alt=""/>
          </div>
        </div>

        <div className='c12'>
          <h1 className='head1'>{productdata.ProductName}
          </h1>
          <div className='c121'>
            <p className='price'>
              ${productdata.SalesPrice * count}
              <span>${productdata.ProductPrice * count}</span>
            </p>

            <div className='incrdecr'>
              <button
                onClick={() => {
                  if(count > 1){
                    setcount(count - 1)
                  }
                }}
              >-</button>
              <p>{count}</p>
              <button
                onClick={() => {
                  if(count < 10){
                    setcount(count + 1)
                  }
                }}
              >+</button>
            </div>
          </div>
        </div>

        <div className='btncont'>
          <button onClick={() => {alert ('ADICIONADO AO CARRINHO')}}>
          CARRINHO
        </button>
        <button onClick={() => {alert('COMPRAR AGORA')}}>
          COMPRAR
        </button>
        </div>
      </div>

      <div className='pc2'>

        {
          showreview ?
          <div className='tabs'>
            <button className='inactive' onClick={() => {setshowreview(false)}}>Descricao</button>
            <button className='active' onClick={() => {setshowreview(true)}}>Reviews</button>
          </div>
          :
          <div className='tabs'>
            <button className='active' onClick={() => {setshowreview(false)}}>
              Descricao
            </button>

            <button className='inactive' onClick={() => {setshowreview(true)}}>
              Reviews
            </button>
          </div>
        }
        {
          showreview ?
          <div className='reviewcont'>
            <form>
              <div className='fromgroup'>
                <label htmlFor=''>Nome</label>
                <input type="text" placeholder='Nome'/>
              </div>

                <div className='fromgroup'>
                  <label htmlFor=''>Email</label>
                  <input type="text" placeholder='Email'/>
                </div>

                <div className='fromgroup'>
                  <label htmlFor=''>Review</label>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Review'></textarea>
              </div>

              <div className='fromgroup'>
                <label htmlFor=''>Nota</label>
                <div className='rating'>
                  <div className='star'
                  
                  >
                    {
                      rating >= 1 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>
                   <div className='star'
                   onClick={() => {
                    setrating(2)
                  }}
                   >
                    {
                      rating >= 2 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>
                   <div className='star'
                   onClick={() => {
                    setrating(3)
                  }}
                   >
                    {
                      rating >= 3 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>
                   <div className='star'
                   onClick={() => {
                    setrating(4)
                  }}
                   >
                    {
                      rating >= 4 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>
                   <div className='star'
                   onClick={() => {
                    setrating(5)
                  }}
                   >
                    {
                      rating >= 5 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>

                </div>
              </div>

              <button>Enviar</button>
            </form>

            <div className='allreview'>
              <h1 className='head1'>Reviews</h1>
              {productdata.ProductReviews && productdata.ProductReviews.map((item, index) => {
                return(
                  <div className='review'>
                    <div className='reviewhead'>
                      <p className='name'>{item.Name}</p>
                      <div className='rating1'>
                  <div className='star'
                  
                  >
                    {
                      item.Rating >= 1 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>
                  <div className='star'
                  
                  >
                    {
                      item.Rating >= 2 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>
                  <div className='star'
               
                  >
                    {
                      item.Rating >= 3 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>
                  <div className='star'
                 
                  >
                    {
                      item.Rating >= 4 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>
                  <div className='star'
                  >
                    {
                      item.Rating >= 5 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

 
                    }
                  </div>
                   


                </div>
                      <span className='date'>{item.Date}</span>
                    </div>
                    <div className='reviewbody'>
                      {item.Review}
                    </div>
                  </div>
                )
              })
              }

            </div>
          </div>
          :
          <p className='desc'>
            {productdata.ProductDescription}
          </p>
        }
      
      </div>
      

     <div className='slidercont'>
      <ProductSlider products={products} categoryname='Relacionados'/>
     </div>
     <div className='slidercont'>
      <ProductSlider products={products} categoryname='Explore Mais'/>
     </div>

     <Footer1/>
     <Footer2/>
    </div>
  )
}

export default ProductPage