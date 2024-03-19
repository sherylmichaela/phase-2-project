import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProductList({ products }) {
  return (
    <Row>
      {products.map((product) => {
        return (
          <Col sm={3}>
            <ProductCard
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Col>
        );
      })}
    </Row>
  );
}
