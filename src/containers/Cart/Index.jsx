import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../actions/movies.action";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log("I am Cart", cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  console.log(cart.cartItems);
  return (
    <table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.cartItems.length > 0
          ? cart.cartItems.Item.map((cart) => (
              <tr
                //   onClick={() => showProductDetailsModal(product)}
                // key={cart._id}
                style={{ cursor: "Pointer" }}
              >
                <td>2</td>
                <td>{cart.name}</td>
                {/* <td>{cart.price}</td> */}
                {/* <td>{product.quantity}</td>
                <td>{product.category.name}</td> */}
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}

export default Cart;
