import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updatecartItemCount } =
    useContext(ShopContext);

  return (
    <div className="auto-cols-auto container mx-2 text-justify between items">
      <img src={productImage} />
      <div className="auto-cols-auto">
        <p className="auto-cols-auto">
          {""}
          <b className="auto-cols-auto"> {productName}</b>
        </p>
        <p className=" auto-cols-auto">${price}</p>
      </div>
      <div className="">
        <button
          className="auto-cols-auto container mx-2 text-justify between items border-5"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updatecartItemCount(Number(e.target.value), id)}
        />
        <button
          className="auto-cols-auto container mx-2 text-justify between items border-5"
          onClick={() => addToCart(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
