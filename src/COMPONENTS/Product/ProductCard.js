import React, {useState} from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductCard = ({data}) => {

  const [show, setshow] = useState(false)
  const [count, setCount] = useState(1)

  //const getproductid = () =>{
  //  alert(data.id)
  //}

  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let productdata = data
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

    //setreloadnavbar(!reloadnavbar)
    window.location.reload()
    //toast.success('ITEM ADICIONADO AO CARRINHO')


  }
  return (
    <div className='product'>
        <div className='s1'>
            <img src={data.productImage[0].image} alt={'no img'} />
        </div>
        <div className='s2'>
            <h3>
                R${
                    data.ProductPrice - (data.ProductPrice * data.ProductDiscount/ 100)
                }
                <span>R${data.ProductPrice}</span>
                </h3>
            <p>{
                data.ProductName
                }</p>
        </div>
        <div className='s3'>
            <p>{data.counttype}</p>
        </div>
        {
          show ? <div className='addbtn'>
            <div className='qty'>
              <button
              onClick={()=>{
                if(count > 1){
                  setCount(count - 1)
                }
              }}
              >-</button>
              <p>{count}</p>
              <button
              onClick={()=> setCount(count + 1)}
              >+</button>
            </div>

            <button className='addtocart'
            onClick={()=>{
              setshow(false)
              //setqty(1)
              addtocart()
            }}
            >
              ADICIONAR
            </button>
          </div>
          :
            <div className='addbtn'>
              <Link
                to={`/product/${data.id}`}
              >
              
              </Link>
                
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
              onClick={() => setshow(true)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
        }

    </div>
  )
}

export default ProductCard