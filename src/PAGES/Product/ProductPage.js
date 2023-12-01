import React, { useEffect } from 'react'
import {Link, useParams } from 'react-router-dom'

import akkocry1 from '../../ASSETS/IMAGES/marcas/akko/akkocry1.png'
import akkored1 from '../../ASSETS/IMAGES/marcas/akko/akkored1.png'
import akkowine1 from '../../ASSETS/IMAGES/marcas/akko/akkowine1.png'
import akkodemon from '../../ASSETS/IMAGES/marcas/akko/akkodemon.png'

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

import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import ProductSlider from '../../COMPONENTS/Product/ProductSlider'
import './ProductPage.css'
import { Toast } from 'bootstrap'
import { toast } from 'react-toastify'


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
          "ProductName": "Switch Akko CS Rose Red",
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
          "SalesPrice": 144,
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
              "Name": "Jonas",
              "Email": "",
              "Rating": 4,
              "Date": "16-11-2023 10:11:00",
              "Review": "Bom produto, funciona muito bem nos teclados da Redragon.",
            },
          ]
        },
      ],
      "Data": [
        {
            "ProductId": 2,
            "ProductName": "Switch Akko CS Green",
            "ProductDescription": "Os switches Matcha Green, Rose Red e Ocean Blue usam molas progressivas, mas o Lavender Purple, Radiant Red e Vintage White tem a mola mais longa (22mm) entre todos os três. O objetivo de realizar a série Custom switch (CS) é oferecer mais opções aos entusiastas de teclados, pois cada pequena mudança criaria experiências de digitação distintas.",
            "productImage": [
              {
                id : 1,
                image : akko6
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
  ]

  const [reloadnavbar, setreloadnavbar] = React.useState(false)
  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))

    if(cart){
      //alert('ITEM JA ADICIONADO AO CARRINHO')
      let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
      if(itemincart){
        cart = cart.map(item => {
          if(item.productdata.ProductId === productdata.ProductId){
            return{
              ...item,
              quantity: item.quantity + count
            }
          }
          else{
            return item
          }
        })
        localStorage.setItem('cart',JSON.stringify(cart))
      }
      else{
        cart = [
          ...cart,
          {
            productdata,
            quantity: count
          }
        ]
        localStorage.setItem('cart',JSON.stringify(cart))
      }
    }
    else{
      cart = [{
        productdata,
        quantity: count
      }]

      //console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
    }

    setreloadnavbar(!reloadnavbar)
    //window.location.reload()
    toast.success('ITEM ADICIONADO AO CARRINHO')
  }

  return (
    <div className='productpage'>
      {

      }

      <Navbar reloadnavbar={reloadnavbar}/>

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
                                return (
                                    <div className='imgsmall'
                                        onClick={() => {
                                            setactiveimg(item)
                                        }}
                                    >
                                        <img src={item.image} alt=""
                                            className={
                                                activeimg.id == item.id ? 'active' : ''
                                            }
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='imgbig'>
                        <img src={activeimg.image} alt="" />
                    </div>
                </div>

                <div className='c12'>
                    <h1 className='head1'>{productdata.ProductName}</h1>
                    <div className='c121'>
                        <p className='price'>
                            ${productdata.SalesPrice * count}
                            <span>${productdata.ProductPrice * count}</span>
                        </p>

                        <div className='incrdecr'>
                            <button
                                onClick={() => {
                                    if (count > 1) {
                                        setcount(count - 1)
                                    }
                                }}
                            >-</button>
                            <p>{count}</p>
                            <button
                                onClick={() => {
                                    if (count < 10) {
                                        setcount(count + 1)
                                    }
                                }}
                            >+</button>
                        </div>
                    </div>

                    <div className='btncont'>
                        <button
                            onClick={() => {
                                addtocart()
                            }}
                        >
                            Adicionar ao carrinho
                        </button>
                        <button
                            onClick={() => {
                                alert('Comprar agora')
                            }}
                        >
                            Coprar agora
                        </button>
                    </div>
                </div>
            </div>
            <div className='pc2'>
                {
                    showreview ?
                        <div className='tabs'>
                            <button
                                className='inactive'

                                onClick={
                                    () => {
                                        setshowreview(false)
                                    }
                                }
                            >Description</button>
                            <button
                                className='active'
                                onClick={
                                    () => {
                                        setshowreview(true)
                                    }
                                }
                            >Reviews</button>
                        </div>
                        :
                        <div className='tabs'>
                            <button
                                className='active'
                                onClick={
                                    () => {
                                        setshowreview(false)
                                    }
                                }
                            >
                                Descricao
                            </button>

                            <button
                                className='inactive'

                                onClick={
                                    () => {
                                        setshowreview(true)
                                    }
                                }
                            >Reviews</button>
                        </div>
                }
                {
                    showreview ?
                        <div className='reviewcont'>
                            <form>
                                <div className='fromgroup'>
                                    <label htmlFor="">Nome</label>
                                    <input type="text" />
                                </div>

                                <div className='fromgroup'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" />
                                </div>

                                <div className='fromgroup'>
                                    <label htmlFor="">Review</label>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </div>

                                <div className='fromgroup'>
                                    <label htmlFor="">Nota</label>
                                    <div className='rating'>
                                        <div className='star'
                                            onClick={() => {
                                                setrating(1)
                                            }}
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

                                        <div className='star' onClick={() => {
                                            setrating(2)
                                        }}>
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
                                        <div className='star' onClick={() => {
                                            setrating(3)
                                        }}>
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
                                        <div className='star' onClick={() => {
                                            setrating(4)
                                        }}>
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
                                        <div className='star' onClick={() => {
                                            setrating(5)
                                        }}>
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
                                {productdata.ProductReviews &&
                                    productdata.ProductReviews.map((item, index) => {
                                        return (
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
                <ProductSlider products={products} categoryname='Relacionados' />
            </div>
           
            <Footer1 />
            <Footer2 />
        </div>
    )
}

export default ProductPage