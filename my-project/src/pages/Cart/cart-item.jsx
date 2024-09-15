import React from 'react'

export const CartItem = (props) => {
  const{ id, productName, price, productImage} =props.data;
  return (
    <div className='container mx-auto p-4 flex items-center justify-between border-b py-2 '>
        <img src={productImage} />
        <div className='container mx-auto p-4 flex items-center justify-between border-b py-2 w-16 h-16'>
            <p className='w-16 h-16 object-cover'>
                {""}
                <b className='w-17 h-16 object-cover'> {productName}</b>
            </p>
            <p className='w-16 h-16 object-cover'>${price}</p>
        </div>
    </div>
  )
}

export default CartItem