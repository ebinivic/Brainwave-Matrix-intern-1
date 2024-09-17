import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-xl font-semibold"> Your Cart Items</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <p className="mt-2 text-3xl font-semibold">
            {" "}
            SubTotal:${totalAmount}
          </p>
          <button
            className="mt-2 bg-blue-500 text-white p-2 rounded"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button className="mt-2 bg-red-500 text-white p-2 rounded">
            {" "}
            CheckOut
          </button>
        </div>
      ) : (
        <h1 className="mt-5 bg-blue-500 text-black">Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
