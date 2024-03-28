import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function WishlistCard({ id, image, name, price, product }) {
  const [buttonText, setButtonText] = useState("Add To Cart");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { addItem } = useCart();

  // Handling Add to Cart button
  const handleClick = () => {
    // Changing button text and state when clicked
    setButtonText("Added to Cart!");
    setButtonDisabled(true);

    setTimeout(() => {
      setButtonText("Add to Cart");
    }, 1000);

    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);

    return addItem(product);
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Link to={`/products/${id}`}>
          <Card.Img
            src={image}
            style={{
              width: "150px",
              aspectRatio: "1/1",
            }}
          />
        </Link>
        <Card.Title style={{ marginTop: 5, marginBottom: 10 }}>
          {name}
        </Card.Title>
        <Card.Subtitle style={{ marginBottom: 10 }}>
          {"$" + price}
        </Card.Subtitle>
        <Button
          variant="primary"
          disabled={buttonDisabled}
          onClick={handleClick}
        >
          {buttonText}
        </Button>

        <Button variant="danger" style={{ marginLeft: 5 }}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}
