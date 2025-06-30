import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import type { CartItemType } from "../types/types";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItemType) => string | undefined;
};

const Productcard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductProps) => {
  return (
    <div className="productcard">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={() =>
            handler({ productId, price, name, photo, stock, quantity: 1 })
          }
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Productcard;
