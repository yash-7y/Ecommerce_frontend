import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrement,
  deleteFromCart,
  increment,
} from "../redux/reducer/cartReducer";
import { server } from "../redux/store";
import type { CartItemType } from "../types/types";
type CartItemProps = {
  cartItem: CartItemType;
};

const CartItemCard = ({ cartItem }: CartItemProps) => {
  const dispatch = useDispatch();
  const { productId, photo, name, price, quantity } = cartItem;

  const incrementHandler = () => dispatch(increment(productId));
  const decrementHandler = () => dispatch(decrement(productId));
  // const deleteHandler = () => dispatch(deleteFromCart(productId));

  return (
    <div className="cart-item">
      <img src={`${server}/${photo}`} alt={name} />

      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button onClick={decrementHandler}>-</button>
        <p>{quantity}</p>
        <button onClick={incrementHandler}>+</button>
      </div>

      <button onClick={() => dispatch(deleteFromCart(productId))}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItemCard;
