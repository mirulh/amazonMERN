import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
  const { product } = props;

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        {/* [1] */}
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          {/* ! IMP */}
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;

/* 

[! IMP]

    <Rating rating={product.rating}></Rating>

    In summary the <Rating rating={product.rating}></Rating> code is rendering the Rating component and passing a prop named rating with the value of the product.rating to it. This allows the Rating component to access and use the product.rating data within its own implementation


[1] card-img-top places an image to the top of the card


*/
