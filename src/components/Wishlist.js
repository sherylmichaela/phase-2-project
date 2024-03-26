import Container from "react-bootstrap/Container";

export default function Wishlist({ name }) {
  return (
    <Container>
      <h1 style={{ marginTop: 100 }}>Wishlist</h1>

      <h2>{name ? name : "No name"}</h2>
    </Container>
  );
}
