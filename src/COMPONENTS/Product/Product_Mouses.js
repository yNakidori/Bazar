import React from 'react'
import CategorySidebar from './CategorySidebar'
import AllProduct from './AllProduct'
import './Product_Sidebar.css'
import AllMouses from './Mouses/AllMouses'

const Product_Mouses = () => {
  return (
    <div className='product_sidebar'>
        <CategorySidebar/>
        <AllMouses/>
    </div>
  )
}

export default Product_Mouses