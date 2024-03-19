import Card from "react-bootstrap/Card";

export default function ProductCard({ id, image, name, price }) {
  return (
    <Card>
      <Card.Body>
        <Card.Img
          src={image}
          style={{
            width: "150px",
            aspectRatio: "1/1",
          }}
        />
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{"$" + price}</Card.Subtitle>
        <button type="button" className="btn btn-primary">
          Add to Cart
        </button>
      </Card.Body>
    </Card>
  );
}
