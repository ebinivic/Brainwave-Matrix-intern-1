import React from 'react'
import { PRODUCTS } from "../../products"
import {Product}from "./Product"
const Shop = () => {
  return (
    <div className='Shop'>
      <div className='Shop Title'>
        <h1> Shoppy Store</h1>
      </div>
      <div className='products'> {PRODUCTS.map((product)=> (
        <Product data={product} />
      ))} 

      </div>
    </div>
  )
}

export default Shop