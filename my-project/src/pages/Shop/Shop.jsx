import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
const Shop = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <h1 className="container mx-2 text-justify font-bold text-3xl">
          {" "}
          Shoppy Store
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 shadow-lg">
        {" "}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
