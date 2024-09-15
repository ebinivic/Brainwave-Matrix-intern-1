import React from 'react'

export const CartItem = (props) => {
  const{ id, productName, price, productImage} =props.data;
  return (
    <div className='container mx-auto p-4 flex items-center justify-between border-b py-2 '>
        <img src={productImage} />
        <div className='container mx-auto p-4 flex items-bottom justify-between border-b py-2 w-16 h-16'>
            <p className='w-16 h-16 object-cover'>
                {""}
                <b className='flex flex-col md:items-center'> {productName}</b>
            </p>
            <p className='flex flex-col md:items-center'>${price}</p>
        </div>
    </div>
  )
}

export default CartItem