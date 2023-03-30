import React from 'react'
import { Product } from '../product/product.component';
import './category-preview.styles.scss';


const CategoryPreview = ({title, items}) => {
  return (  
      <div className='category-preview-container'>
          <h2>
              <span className='title'>{title.toUpperCase()}</span>
          </h2>
          <div className="preview">
              {
                  items.filter((_, idx) => idx < 4)
                      .map((product) => 
                          <Product key={product.id} product={product} />
                  )
              }
          </div>
      </div>
  )
}

export default CategoryPreview