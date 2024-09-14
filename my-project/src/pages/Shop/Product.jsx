import React,{useContext} from 'react';
import {ShopContext} from "../../context/shop-context";

 export const Product = (props) => {
    const{ id, productName, price, productImage} =props.data;
    const {addToCart, cartItems}=useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  return (
    <div className='products'>
      <img src={productImage} />
      <div className='description'>
      </div>
      <div>
        <p>
      <b>{productName}</b>
      </p>
      <p>
        ${price}
      </p>
      </div>
      <div>
      <button className='addToCart Bttn' onClick={()=> addToCart(id)}>
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
      </div>

      </div>
      
  )
}

export default Product