import React, {useContext} from 'react';
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import {CartItem} from "./cart-item";


export const Cart = () => {
const{cartItems} = useContext(ShopContext);

  return (
    <div className='container mx-auto p-4'>
    <div>
    <h1 className='text-xl font-semibold'> Your Cart Items</h1>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {PRODUCTS.map((product)=> {
      if (cartItems[product.id] !==0) {
        return <CartItem data={product} />;
      }
     })}
    
    </div>
    <div className='çheckout'>
      <p> SubTotal:$</p>
      <button>Continue Shopping</button>
      <button> CheckOut</button>

      </div>
    </div>
  )
}

export default Cart