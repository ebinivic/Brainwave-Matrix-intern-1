import React,{useContext} from 'react';
import {ShopContext} from "../../context/shop-context";

 export const Product = (props) => {
    const{ id, productName, price, productImage} =props.data;
    const {addToCart, cartItems}=useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  return (
    <div className='justify-between border-b py-2'>
      <img src={productImage} />
      <div className='justify-between border-b py-2'>
      </div>
      <div>
        <p className="text-xl font-semibold mt-2">
      <b>{productName}</b>
      </p>
      <p>
        ${price}
      </p>
      </div>
      <div>
      <button className='mt-2 bg-blue-500 text-white p-2 rounded' onClick={()=> addToCart(id)}>
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
      </div>

      </div>
      
  )
}

export default Product