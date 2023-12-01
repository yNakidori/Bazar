// CategorySidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import ic1 from '../../ASSETS/IMAGES/icones/ic1.svg';
import ic2 from '../../ASSETS/IMAGES/icones/ic2.svg';
import ic3 from '../../ASSETS/IMAGES/icones/ic3.svg';
import ic4 from '../../ASSETS/IMAGES/icones/ic4.svg';
import ic5 from '../../ASSETS/IMAGES/icones/ic5.svg';
import ic6 from '../../ASSETS/IMAGES/icones/ic6.svg';
import ic7 from '../../ASSETS/IMAGES/icones/ic7.svg';
import ic8 from '../../ASSETS/IMAGES/icones/ic8.svg';
import './CategorySidebar.css';

const CategorySidebar = () => {
  const data = [
    {
      id: 1,
      categoryimage: ic1,
      categoryname: 'TECLADOS',
    },
    {
      id: 2,
      categoryimage: ic2,
      categoryname: 'MOUSES',
    },
    {
      id: 3,
      categoryimage: ic3,
      categoryname: 'MONITORES',
    },
    {
      id: 4,
      categoryimage: ic4,
      categoryname: 'GABINETES',
    },
    {
      id: 5,
      categoryimage: ic5,
      categoryname: 'COOLERS',
    },
    {
      id: 6,
      categoryimage: ic6,
      categoryname: 'INTEL',
    },
    {
      id: 7,
      categoryimage: ic7,
      categoryname: 'AMD',
    },
    {
      id: 8,
      categoryimage: ic8,
      categoryname: 'NVIDIA',
    },
  ];

  return (
    <div className='categorysidebar'>
      {data.map((item) => (
        <div key={item.id} className='category'>
          {item.categoryname === 'TECLADOS' || item.categoryname === 'MOUSES' ? (
            <Link to={`/${item.categoryname.toLowerCase()}`} className='category-link'>
              <img src={item.categoryimage} alt='categoryimage' />
              <h3>{item.categoryname}</h3>
            </Link>
          ) : (
            <div>
              <img src={item.categoryimage} alt='categoryimage' />
              <h3>{item.categoryname}</h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
