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
          ? cart.cartItems.map((cart) =>
              cart.cartItems.map((test) => (
                <tr
                  //   onClick={() => showProductDetailsModal(product)}
                  key={test._id}
                  style={{ cursor: "Pointer" }}
                >
                  <td>{test.movie.movieName}</td>
                  <td>{test.movie.price}</td>
                </tr>
              ))
            )
          : null}
      </tbody>
    </table>
  );
}

export default Cart;
