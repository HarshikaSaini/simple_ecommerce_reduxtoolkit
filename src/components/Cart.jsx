import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItems = (id) => {
    dispatch(remove(id));
  };

  const cards = cartProduct.map((product) => (
    <div key={product.id} className="col-md-3 ">
      <Card style={{ width: "20rem", height: "20rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body className="text-center">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer
          className="text-center"
          style={{ backgroundColor: "white" }}
        >
          <Button variant="danger" onClick={() => handleRemoveItems(product.id)}>
           Remove From Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div>{cards}</div>;
};

export default Cart;
