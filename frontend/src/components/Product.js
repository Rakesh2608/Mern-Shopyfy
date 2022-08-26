import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <Card
      style={{ width: "18rem", height: "25rem", marginBottom: "10px" }}
      className=" space-between border-light"
    >
      <Link to={`/product/${props.product1._id}`}>
        <Card.Img src={props.product1.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${props.product1._id}`}>
          <Card.Title as="div">
            <strong>{props.product1.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={props.product1.rating}
            text={`${props.product1.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${props.product1.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
