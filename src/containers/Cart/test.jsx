import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row, Table } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../actions/product.action";
import Modal from "../../components/UI/Modal";
import { imgURL } from "../../urlConfig";

export default function Cart() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const product = useSelector((state) => state.product);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  const handleClose = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }

    dispatch(addProduct(form));

    setShow(false);
  };

  const renderProducts = () => {
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {product.products.length > 0
            ? product.products.map((product) => (
                <tr
                  //   onClick={() => showProductDetailsModal(product)}
                  key={product._id}
                  style={{ cursor: "Pointer" }}
                >
                  <td>2</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category.name}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };

  console.log(product.products);

  //   const showProductDetailsModal = (product) => {
  //     setProductDetails(product);
  //     setProductDetailModal(true);
  //   };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Products</h3>
        {/* <button onClick={handleShow} type="button" class="btn btn-primary">
          Add
        </button> */}
      </div>
      {renderProducts()}
    </div>
  );
}
