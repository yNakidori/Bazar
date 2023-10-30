import React from 'react'
import ic1 from '../../ASSETS/IMAGES/icones/ic1.svg'
import ic2 from '../../ASSETS/IMAGES/icones/ic2.svg'
import ic3 from '../../ASSETS/IMAGES/icones/ic3.svg'
import ic4 from '../../ASSETS/IMAGES/icones/ic4.svg'
import ic5 from '../../ASSETS/IMAGES/icones/ic5.svg'
import ic6 from '../../ASSETS/IMAGES/icones/ic6.svg'
import ic7 from '../../ASSETS/IMAGES/icones/ic7.svg'
import ic8 from '../../ASSETS/IMAGES/icones/ic8.svg'
import './CategorySidebar.css'


const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: ic1,
            categoryname: 'Category 1'
        },
        {
          id: 2,
          categoryimage: ic2,
          categoryname: 'Category 2'
        },
        {
          id: 3,
          categoryimage: ic3,
          categoryname: 'Category 3'
        },
        {
          id: 4,
          categoryimage: ic4,
          categoryname: 'Category 4'
        },
        {
          id: 5,
          categoryimage: ic5,
          categoryname: 'Category 5'
        },
        {
          id: 6,
          categoryimage: ic6,
          categoryname: 'Category 6'
        },
        {
          id: 7,
          categoryimage: ic7,
          categoryname: 'Category 7'
        },
        {
          id: 8,
          categoryimage: ic8,
          categoryname: 'Catagory 8'
        },
    ]
  return (
    <div className='categorysidebar'>
      {
        data.map((item) => {
          return(
            <div className='category'>
              <img src={item.categoryimage}
               alt='categoryimage' />
              <h3>{item.categoryname}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default CategorySidebar