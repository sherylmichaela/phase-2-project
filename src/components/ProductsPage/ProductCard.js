import Card from "react-bootstrap/Card";

export default function ProductCard({ name, price }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{price}</Card.Subtitle>
        <button type="button" className="btn btn-primary">
          Add to Cart
        </button>
      </Card.Body>
    </Card>
  );
}
