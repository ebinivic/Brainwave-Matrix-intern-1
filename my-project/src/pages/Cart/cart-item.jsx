import React from 'react'

export const CartItem = (props) => {
  const{ id, productName, price, productImage} =props.data;
  return (
    <div className='container mx-auto p-4 flex items-center justify-between border-b py-2"'>
        <img src={productImage} />
        <div className='flex items-center justify-between border-b py-2 w-16 h-16 object-cover mr-4""'>
            <p>
                {""}
                <b> {productName}</b>
            </p>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default CartItem