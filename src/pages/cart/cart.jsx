import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { Products } from '../../products'
import { Shopcontext } from '../../context/shop-context'
import { Cartitem } from './Cartitem'
import './cart.css'




export const Cart = () => {
  const {cartitems,calculateamount} =useContext(Shopcontext);
  let amount=calculateamount();
  return (
    <div className='cart'>
       <div>
        <h1>Your Cart Items</h1>
       </div>
       <div className='cartitems'>
        {Products.map((product)=>{
          if(cartitems[product.id]!=0)
          {
            return <Cartitem data={product} />
          }
        })}
       </div>

       {amount >0 ? 
       <>
       <div className='total'>
        <b>
       Price To Pay : ₹{amount}/-
       
       </b>
       
      </div>
      <div >
      <Link to="/" class="backtoshopbtn">Back To Shop</Link>

      <button className='paymentbtn '>PAY</button>
     </div>
     </>
      : 
      <>
      <h1>
        OOPs! Your Cart Is Empty.</h1>
        <Link to="/" class="backtoshopbtn">Back To Shop</Link>
        </>
        }
    </div>
  )
}

