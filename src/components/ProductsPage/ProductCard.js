import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function ProductCard({ id, image, name, price }) {
  const [buttonText, setButtonText] = useState("Add To Cart");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClick = () => {
    setButtonText("Added to Cart!");
    setButtonDisabled(true);

    setTimeout(() => {
      setButtonText("Add to Cart");
    }, 1000);

    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Img
          src={image}
          style={{
            width: "150px",
            aspectRatio: "1/1",
          }}
        />
        <Card.Title style={{ marginTop: 5, marginBottom: 10 }}>
          {name}
        </Card.Title>
        <Card.Subtitle style={{ marginBottom: 10 }}>
          {"$" + price}
        </Card.Subtitle>
        <Button
          variant="primary"
          style={{ marginBottom: 5 }}
          disabled={buttonDisabled}
          onClick={handleClick}
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
