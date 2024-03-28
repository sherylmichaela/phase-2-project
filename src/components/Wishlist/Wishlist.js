import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../ProductsPage/ProductCard";

export default function Wishlist({ wishlistItems, addToWishlist }) {
  return (
    <Container>
      <h1 style={{ marginTop: 100 }}>Wishlist Items</h1>
      <br />
      <Row sm={1} md={2} lg={4} className="g-5">
        {wishlistItems.map((item, index) => {
          return (
            <Col>
              <ProductCard
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                item={item}
                key={index}
                addToWishlist={addToWishlist}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
