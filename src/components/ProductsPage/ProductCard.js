import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { useState, useRef } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  image,
  name,
  price,
  product,
  updateName,
}) {
  const [buttonText, setButtonText] = useState("Add To Cart");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { addItem } = useCart();

  // State and Ref for heart button
  const [show, setShow] = useState(false);
  const target = useRef(null);

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

  // Handle Add to Fav button
  const handleShowTooltip = () => {
    setShow(true);

    // Set a timeout to hide the tooltip after 3 seconds (adjust as needed)
    setTimeout(() => {
      setShow(false);
    }, 2000);

    updateName(id);
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

        <Button
          variant="danger"
          style={{ marginLeft: 5 }}
          ref={target}
          onClick={handleShowTooltip}
        >
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          }
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              Added to Wishlist!
            </Tooltip>
          )}
        </Overlay>
      </Card.Body>
    </Card>
  );
}
