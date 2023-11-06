import React from 'react'
import {Products} from '../../products'; 
import {Product} from './Product'
import './shop.css';
export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shoptitle'>
            <h1>Garg E-Commerce</h1>
        </div>
        <div className='products'>
         {Products.map((product)=>{
            return < Product data={product} />
            
         })}
        </div>

    </div>
  )
}
