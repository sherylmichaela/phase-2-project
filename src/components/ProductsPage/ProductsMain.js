import { products } from "../../data.js";
import ProductList from "./ProductList.js";
import Container from "react-bootstrap/Container";

export default function ProductIndex({ updateName }) {
  return (
    <>
      <Container>
        <h1 style={{ marginTop: 100 }}>Products</h1>
        <br />
        <ProductList products={products} updateName={updateName} />
      </Container>
    </>
  );
}
