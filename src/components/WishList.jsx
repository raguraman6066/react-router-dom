import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdAddShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { cartActions } from "../store/cartslice";
let { addItem, removeItem } = cartActions;
const WishList = () => {
  let cartProducts = useSelector((state) => {
    return state.cart;
  });
  let products = cartProducts;
  console.log(cartProducts);
  let dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(removeItem(id));
  }
  return (
    <div>
      <h2>Wish List</h2>
      {products.length !== 0 ? (
        <section className="products">
          {products.map((product) => (
            <Card
              key={product.id}
              style={{ width: "18rem" }}
              className="product"
            >
              <center>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "9rem", height: "12rem" }}
                />
              </center>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {/* <Card.Text style={{ overflow: "scroll", height: "150px" }}>
                {product.description}
              </Card.Text> */}
                <Card.Title>$ {product.price}</Card.Title>
              </Card.Body>
              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="danger"
                  onClick={() => handleDelete(product.id)}
                >
                  <MdDelete />
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
      ) : (
        <h1>Please purchase something!</h1>
      )}
    </div>
  );
};

export default WishList;
