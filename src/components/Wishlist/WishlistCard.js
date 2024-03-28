import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function WishlistCard({
  id,
  image,
  name,
  price,
  removeFromWishlist,
}) {
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
          variant="danger"
          style={{ marginLeft: 5 }}
          onClick={() => removeFromWishlist(id)}
        >
          Remove from Wishlist
        </Button>
      </Card.Body>
    </Card>
  );
}
