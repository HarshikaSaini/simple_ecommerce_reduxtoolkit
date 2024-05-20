import { useEffect, useState } from "react";
import { Card, Button, CardFooter } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }}>
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
        <CardFooter className="text-center" style={{backgroundColor:"white"}}>
          <Button variant="primary">Add To Cart</Button>
        </CardFooter>
      </Card>
    </div>
  ));

  return <div className="row">{cards}</div>;
};

export default Products;
