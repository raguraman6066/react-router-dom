import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Atom } from "react-loading-indicators";
const List = () => {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json(); //convert response to json data
        } else {
          throw new Error("Search Proper Data");
        }
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div>
        <Atom color="#2699e8" size="medium" text="Loading..." textColor="" />
      </div>
    );
  }
  return (
    <div>
      <h1>Product List</h1>
      <section className="products">
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }} className="product">
            <center>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "9rem", height: "12rem" }}
              />
            </center>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text style={{ overflow: "scroll", height: "150px" }}>
                {product.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Card.Title>$ {product.price}</Card.Title>
              <Button variant="primary">Add to Card</Button>
            </Card.Footer>
          </Card>
        ))}
      </section>
      {error && <p>{error}</p>}
    </div>
  );
};

export default List;
