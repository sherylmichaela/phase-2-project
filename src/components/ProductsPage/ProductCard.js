import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard({ id, image, name, price }) {
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
        <Button variant="primary" style={{ marginBottom: 5 }}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
