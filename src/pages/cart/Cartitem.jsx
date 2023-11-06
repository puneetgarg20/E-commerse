import React, { useContext } from 'react'
import { Shopcontext } from '../../context/shop-context';
export const Cartitem = (props) => {
  const {id,name,price,img} = props.data;
  const {cartitems,addToCart,removeFromCart,setcartitemtotarget} =useContext(Shopcontext);
  return (
    <div className='cartitem'>
     <img src={img}  />
     <div className='description'>
      <p><b>{name}</b></p>
      <p>₹{price}</p>
      <button  className="minus" onClick={()=>{removeFromCart(id)}}>-</button>
      <input value={cartitems[id]} onChange={(e)=>setcartitemtotarget(e.target.value,id)} />
      <button className="plus"  onClick={()=>{addToCart(id)}}>+</button>
     </div>

    </div>
  )
}
