import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data.js";

export default function ProductDisplay() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productFound = products.find(
      (product) => String(product.id) === productId
    );

    setProduct(productFound);
  }, [productId]);

  return (
    <Container>
      {product ? (
        <>
          <h4 style={{ marginTop: 100 }}>{product.name}</h4>
          <h3>{product.description}</h3>
        </>
      ) : (
        <p style={{ marginTop: 100 }}>Nothing found</p>
      )}
    </Container>
  );
}
