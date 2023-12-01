import React, { useEffect, useState } from 'react';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner';
import './Cart.css';
import './CartContainer.css';
import './Progress.css';
import './ShippingContainer.css';
import './PaymentContainer.css';
import './OrderSucessfull.css';
import OrderConfirmation from '../Auth/OrderConfirmation';
import { salvarPedidoNoFirebase } from './firebaseFunctions';

const Cart = () => {
  const [cartdata, setcartdata] = React.useState([]);
  const [subtotal, setsubtotal] = React.useState(0);
  const [shipping, setshipping] = React.useState(0);
  const [active, setactive] = React.useState(1);
  const [tax, settax] = React.useState(0);
  const [deliverydate, setdeliverydate] = React.useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );

  const [orderDetails, setOrderDetails] = React.useState(null);

  const getcartitemsfromlocalstorage = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      console.log(cart);
      setcartdata(cart);

      let tempsubtotal = 0;
      cart.forEach((item) => {
        tempsubtotal += item.productdata.SalesPrice * item.quantity;
      });

      setsubtotal(tempsubtotal);
      setshipping(80);
      settax(tempsubtotal * 0.18 + tempsubtotal + 80 * 0.10);
    } else {
      console.log('Carrinho vazio');
    }
  };

  React.useEffect(() => {
    getcartitemsfromlocalstorage();
  }, []);

  React.useEffect(() => {
    if (active === 4) {
      const orderDetailsData = {
        items: cartdata,
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: (tax + subtotal + shipping).toFixed(2),
      };

      setOrderDetails(orderDetailsData);
    }
  }, [active, cartdata, subtotal, shipping, tax]);

  const checklogin = () => {
    return true;
  };

  const [reloadnavbar, setreloadnavbar] = React.useState(false);

  const removeitemfromcart = (index) => {
    let temp = [...cartdata];
    temp.splice(index, 1);
    setcartdata(temp);
    localStorage.setItem('cart', JSON.stringify(temp));
    getcartitemsfromlocalstorage();
  };

  const savedaddress = [
    {
      AdressLine1: 'Rua',
      AdressLine2: 'Bairro',
      AdressLine3: 'Cidade',
      postalcode: `00000000`,
    },
    {
      AdressLine1: 'Rua',
      AdressLine2: 'Bairro',
      AdressLine3: 'Cidade',
      postalcode: `00000000`,
    },
  ];
  
  return (
    <div>
      <Navbar reloadnavbar={reloadnavbar}/>
      <SingleBanner
        heading='Meu carrinho'
        bannerimage='https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />

        <div className='cart'>

          <div className='progress'>
            {
              active == 1 ?
              <div className='c11'
              onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(1)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
<span>Meu carrinho</span>
              </div>
              :
              <div className='c1'
              onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(1)
              }}
              >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
<span>Meu carrinho</span>
              </div>
            }

{
              active == 2 ?
              <div className='c11'
              onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(2)
              }}
              >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>


<span>Pagamento</span>
              </div>
              :
              <div className='c1'
              onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(2)
              }}
              >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

<span>Pagamento</span>
              </div>
            }

            {
              active == 3 ?
              <div className='c11'
              onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(3)
              }}
              >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

<span>Pagamento</span>
              </div>
              :
              <div className='c1'
              onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(3)
              }}
              >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>
<span>Pagamento</span>
              </div>
            }

              {
              active == 4 ?
              <div className='c11'
              onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(4)
              }}
              >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>
<span>Finalizacao</span>
              </div>
              :
              <div className='c1'
              onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(4)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>
<span>Finalizacao</span>
              </div>
            }

           
          </div>

          {
            active == 1 &&
            <div className='cartcont'>
              {/*<p>Conteudo do carrinho</p>*/}
              {
                cartdata.length > 0 ?
                <table className='carttable'>
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Quantidade</th>
                      <th>Preco</th>
                      <th>Total</th>
                      <th>Remover</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartdata.map((item, index)=>{
                        return(
                          <tr key={index} className='cartitemrow'>
                            <td>
                            <div className='cartproduct'
                            onClick={() => {
                              window.location.href = `/product/${item.productdata.ProductId}`
                            }}>
                            {/*<img src={item.productdata.ProductImage[0].image} alt={item.productdata.ProductName}/>*/}
                            <p>{
                              item.productdata.ProductName
                              }</p>
                            </div>
                            </td>

                            <td>
                              <div className='quantity'>
                                <button className='minus'
                                onClick={() => {
                                  let newcartdata = [...cartdata]

                                  if(newcartdata[index].quantity > 1){
                                    newcartdata[index].quantity -= 1
                                    setcartdata(newcartdata)
                                    localStorage.setItem('cart', JSON.stringify(newcartdata))
                                    getcartitemsfromlocalstorage()
                                  }
                                }}
                                >-</button>
                                <span>{item.quantity}</span>
                                <button className='plus'
                                onClick={() => {
                                  let newcartdata = [...cartdata]
                                  newcartdata[index].quantity += 1
                                  setcartdata(newcartdata)
                                  localStorage.setItem('cart', JSON.stringify(newcartdata))
                                  getcartitemsfromlocalstorage()
                                }}
                                >+</button>
                              </div>
                            </td>

                            <td>
                              <p>
                                $ {item.productdata.SalesPrice ? item.productdata.SalesPrice. toFixed(2) : 0.00}
                              </p>
                            </td>

                            <td>
                              <p>$ {
                               ( item.productdata.SalesPrice * item.quantity).toFixed(2)
                      }</p>
                            </td>

                            <td>
                              <div className='delbtn'
                              onClick={() => {
                                removeitemfromcart(index)
                              }}
                              >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }

                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Sub-total</td>
                      <td className='totaltableright'>
                        R$ {subtotal.toFixed(2)}
                      </td>
                    </tr>

                    <tr>
                    <td></td>
                      <td></td>
                      <td className='totaltableleft'>Frete</td>
                      <td className='totaltableright'>
                        R$ {shipping.toFixed(2)}
                      </td>
                    </tr>

                    <tr>
                    <td></td>
                      <td></td>
                      <td className='totaltableleft'>Total</td>
                      <td className='totaltableright'>
                        R$ {(subtotal + shipping).toFixed(2)}
                      </td>
                    </tr>

                    <tr>
                    <td></td>
                      <td></td>
                      <td className='totaltableleft'>Impostos e manuseio</td>
                      <td className='totaltableright'>
                       R$ {tax.toFixed(2)}
                      </td>
                    </tr>

                    <tr>
                    <td></td>
                      <td></td>
                      <td className='totaltableleft'>Valor final</td>
                      <td className='totaltableright'>
                       R$ {(tax + subtotal + shipping).toFixed(2)}
                      </td>
                    </tr>

                  </tbody>
                </table>
                :
                <div className='emptycart'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

                  <p>Seu carrinho esta vazio</p>
                  </div>
              }
            </div>
          }
{/* */}
          {
            active == 2 &&
            <div className='shippingcont'>
              <div className='selectdate'>
                <h2 className='mainhead1'>Escolha a data de entrega</h2>
                <input
                min={new Date(new Date().getTime() + 2*24*60*60*1000).toISOString().split('T')[0]}
                type='date'
                value={deliverydate}
                onChange={(e) => {
                  setdeliverydate(e.target.value)
                }}
                />
                </div>

                <div className='previous'>
                  <h2 className='mainhead1'>Enderecos utilizados anteriormente</h2>
                  {
                    savedaddress.length > 0 ?
                    savedaddress.map((item, index) => {
                      return(
                        <div className='radio' key={index}>
                          <input type='radio' name='address' id={index}/>
                          <span>
                            {
                              item.AdressLine1 + ', ' + item.AdressLine2 + ', ' + item.AdressLine3 + ', ' + item.postalcode
                            }
                          </span>
                        </div>
                      )
                    })
                    :
                    <div className='emptyaddress'>
                      <p>Nenhum endereco localizado</p>
                    </div>
                  }
                </div>
                <h3>OU</h3>
                <div className='shippingadd'>
                  <input type='text' placeholder='Endereco de entrega'/>
                  <input type='text' placeholder='Complemento'/>
                  <input type='text' placeholder='Bairro'/>
                  <input type='text' placeholder='CEP'/>
                  <button>Salvar</button>
                </div>
                
              
            </div>
          }
{/* */}
          {
            active == 3 &&
            <div className='paymentcont'>
              <h2 className='mainhead1'>Selecione a forma de pagamento</h2>
              <div className='paymenttypes'>
                <div className='c1'>
                  <input type='radio' name='payment' id='payment1'/>
                  <img src='https://s2-techtudo.glbimg.com/8CYJpCx54gNyNrHWwm2x9-DHAiw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/T/d/9KN7bBSd6UKk4hcitczA/marca-pix-1-.jpg'
                  alt='pix'/>
                </div>

                <div className='c1'>
                  <input type='radio' name='payment' id='payment1'/>
                  <img src='https://www.dsgadvogados.com.br/wp-content/uploads/2017/02/boleto-banc%C3%A1rio-aliexpress.jpg'
                  alt='boleto'/>
                </div>

                <div className='c1'>
                  <input type='radio' name='payment' id='payment1'/>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/2560px-Mastercard_2019_logo.svg.png'
                  alt='cartao'/>
                </div>
              </div>

              <div className='paymentagreement'>
                <input type='checkbox' name='agreement' id='agreement'/>
                <label htmlFor='agreement'>Eu concordo com os termos e condicoes</label>
              </div>

              <div className='c2'>
                <span>Total:</span>
                &nbsp;&nbsp;
                <span>R$ {(subtotal+tax+shipping).toFixed(2)}</span>
              </div>
            </div>
          }
{/* */}
{
  active === 4 && (
    <div className='order-summary'>
      {/* ... (seu código existente) */}
      <button
  className='nextbtn'
  onClick={() => {
    alert('Pedido concluído');
    setOrderDetails({
      items: cartdata,
      subtotal,
      shipping,
      tax,
      total: (subtotal + shipping + tax).toFixed(2),
    });

    salvarPedidoNoFirebase({
      items: cartdata,
      subtotal,
      shipping,
      tax,
      total: (subtotal + shipping + tax).toFixed(2),
    });

    setactive(5);
  }}
>
  Confirmar Pedido
</button>
    </div>
  )
}

{active === 5 && <OrderConfirmation />}


{/* */}
          {
            active == 1 && cartdata.length > 0 &&
            <div className='btns'>
              <button className='nextbtn'
              onClick={() => {
                checklogin() && setactive(2)              
              }}
              >Proximo</button>
            </div>
          }
{/* */}
          {
            active == 2 &&
            <div className='btns'>
               <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(1)              
              }}
              >Voltar</button>
              <button className='nextbtn'
              onClick={() => {
                checklogin() && setactive(3)              
              }}
              >Proximo</button>
            </div>
          }
{/* */}
          {
            active == 3 &&
            <div className='btns'>
               <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(2)              
              }}
              >Voltar</button>
              <button className='nextbtn'
              onClick={() => {
                checklogin() && setactive(4)              
              }}
              >Proximo</button>
            </div>
          }
{/* */}
          {
            active == 4 &&
            <div className='btns'>
              {/*<button className='backbtn'
              onClick={() => {
                checklogin() && setactive(3)              
              }}
            >Voltar</button>*/}
              <button className='nextbtn'
              onClick={() => {
                alert('Pedido concluido')  
                window.location.href = '/'
              }}
              >Voltar para Home</button>
            </div>
          }



        </div>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default Cart