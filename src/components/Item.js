import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setInCart] = useState(false);

  const cartStatus = isInCart ? "in-cart" : "";
  const cartButtonTxt = isInCart ? "Remove from Cart" : "Add to Cart"

  const addToCart = () => {
    setInCart(!isInCart)
  }


  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{cartButtonTxt}</button>
    </li>
  );
}

export default Item;
