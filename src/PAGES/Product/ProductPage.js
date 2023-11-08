import React, { useEffect } from 'react'
import {Link, useParams } from 'react-router-dom'
import img1 from '../../ASSETS/IMAGES/giftcards/ps3.jpg'
import img2 from '../../ASSETS/IMAGES/giftcards/ps2.jpg'
import img3 from '../../ASSETS/IMAGES/giftcards/ps1.jpg'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
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
          "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
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
              "Rating": 4,
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
  },[])
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

              <button>Enviar</button>
            </form>

            <div className='allreview'>
              <h1 className='head1'>Reviews</h1>
              {productdata.ProductReviews && productdata.ProductReviews.map((item, index) => {
                return(
                  <div className='review'>
                    <div className='reviewhead'>
                      <p className='name'>{item.Name}</p>
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
     <Footer1/>
     <Footer2/>
    </div>
  )
}

export default ProductPage