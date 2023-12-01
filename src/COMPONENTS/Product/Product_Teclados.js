import React from 'react'
import CategorySidebar from './CategorySidebar'
import AllProduct from './AllProduct'
import './Product_Sidebar.css'
import AllTeclados from './Teclados/AllTeclados'

const Product_Teclados = () => {
  return (
    <div className='product_sidebar'>
        <CategorySidebar/>
        <AllTeclados/>
    </div>
  )
}

export default Product_Teclados