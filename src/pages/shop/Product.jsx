import React, { useContext } from 'react'
import { Shopcontext } from '../../context/shop-context';
export const Product = (props) => {
    const {id,name,price,img} = props.data;
    const {addToCart,cartitems} =useContext(Shopcontext);
    console.log(cartitems);
  return (
    <div className='product'>
        <img src={img} alt="Not Loaded.."  />
        <div className="description">
            <p>
                <b>{name}</b>
            </p>
            <p>₹{price}/-</p>
        </div>
        <button className='addtocartbttn' onClick={()=>addToCart(id)}>
          Add To Cart {cartitems[id]>0 && <> ({cartitems[id]})</>  }
          </button>
         
    </div>
  );
}
