import React, { createContext, useState } from 'react'
import { Products } from '../products';


export const Shopcontext =createContext();

const getdefaultcart=()=>{
 let cart={};
 for(let i=1;i<=Products.length;i++)
 {
    cart[i]=0;
 }

 return cart;
}

export const ShopContextProvider = (props) => {
    const [cartitems,setcartitems]=useState(getdefaultcart());
     
    const addToCart=(itemid)=>{
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}));
    }

    const removeFromCart=(itemid)=>{
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}));
    }

    const setcartitemtotarget=(newvalue,itemid)=>
    {
      setcartitems((prev)=>({...prev,[itemid]:newvalue}));
    }

   const calculateamount=()=>{
    let total=0;
    for(const i in cartitems)
    {
         if(cartitems[i]>0)
         {
          let amount=cartitems[i]*Products[i-1].price;
         total+=amount;
         console.log(total);
         }
        
    }
    //total+=cartitems[1]*Products[0].price;
    
    return total;
   }

    const contextvalue={cartitems,addToCart,removeFromCart,setcartitemtotarget,calculateamount};
  return (
    <Shopcontext.Provider value={contextvalue}>
        {props.children}
    </Shopcontext.Provider>
  )
}
