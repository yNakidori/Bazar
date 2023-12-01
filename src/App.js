import React from 'react'
import{Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import Home from './PAGES/HomePage/Home'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './PAGES/Product/ProductPage';
import About from './PAGES/Extra/About';
import Contact from './PAGES/Extra/Contact';
import Login from './PAGES/Auth/Login';
//import Signup from './PAGES/Auth/Signup';
import ForgotPassword from './PAGES/Auth/ForgotPassword';
import Cart from './PAGES/Cart/Cart';
import SignIn from './PAGES/Auth/SignIn';
import SgUp from './PAGES/Auth/SgUp';
import AuthDetails from './PAGES/Auth/AuthDetails';
import InventoryLog from './COMPONENTS/Inventory/inventoryLog';
import New from './COMPONENTS/Inventory/New';
import List from './COMPONENTS/Inventory/list';
import { productInputs, userInputs } from "./formSource";
import Teclados from './COMPONENTS/Product/Teclados/Teclados';
import Mouses from './COMPONENTS/Product/Mouses/Mouses';
import OrderConfirmation from './PAGES/Auth/OrderConfirmation';

const App = () => {

  const currentUser = true;

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to='login'/>
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signin' element={<SignIn/>}/>
      <Route path="home" element={<RequireAuth><Cart /></RequireAuth>} />
      <Route path="/product/:prodid" 
          element={
            <ProductPage/>
          }
        />
        <Route path='/sgup' element={<SgUp/>}/>
        <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
        <Route path='inventorylog' element={<InventoryLog/>}/>
        <Route path='list' element={<List/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        {/*<Route path='/signup' element={<Signup/>}/>*/}
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/teclados' element={<Teclados/>}/>
        <Route path='/mouses' element={<Mouses/>}/>
        <Route path='/orderconfirmation' element={<OrderConfirmation/>}/>
        <Route path="*" element={<div>
        <h1>404 NOT FOUND</h1>
      </div>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App