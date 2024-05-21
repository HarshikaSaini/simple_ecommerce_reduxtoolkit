import { useEffect} from "react";
import { Card, Button, Alert } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import { add } from "../Store/cartSlice.js";
import { getProducts } from "../Store/productSlice.js";

const Products = () => {
  const dispatch = useDispatch();

  const {data: products,status} = useSelector(state => state.products);
 
  useEffect(() => {
     dispatch(getProducts())
  }, [])

  if(status==="Loading"){
    return <h1 className="text-center">Loading..</h1>
  }

  if(status==="Error"){
    return <Alert variant="danger" className="text-center" >Something went wrong try again later.. </Alert>
  }
  
  const handleAddToCart = (product)=>{
      dispatch(add(product))
  }

  

 
  const cards = products.map((product) => (
    <div className="col-md-3" style={{marginBottom:"10px"}}>
      <Card  key={product.id}  className="h-100">
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
        <Card.Footer className="text-center" style={{backgroundColor:"white"}}>
          <Button variant="primary" onClick={()=>handleAddToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return(
  <>
   <h1 style={{textAlign:"center"}}> Product Dashboard</h1>
   <div className="row">{cards}</div>;
  </>)
  
 
};

export default Products;
