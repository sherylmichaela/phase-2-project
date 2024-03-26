import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProductList({ products, updateName }) {
  return (
    <Row sm={1} md={2} lg={4} className="g-5">
      {products.map((product, index) => {
        return (
          <Col>
            <ProductCard
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              product={product}
              key={index}
              updateName={updateName}
            />
          </Col>
        );
      })}
    </Row>
  );
}
