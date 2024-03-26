// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data.js";
import { useCart } from "react-use-cart";
import "./ProductDisplay.css";

export default function ProductDisplay({ updateName }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const [buttonText, setButtonText] = useState("Add To Cart");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const productFound = products.find(
      (product) => String(product.id) === productId
    );

    setProduct(productFound);
  }, [productId]);

  const handleClick = () => {
    // Changing button text and state when clicked
    setButtonText("Added to Cart!");
    setButtonDisabled(true);

    setTimeout(() => {
      setButtonText("Add to Cart");
    }, 1000);

    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);

    updateName(product.id);
    return addItem(product);
  };

  return (
    <>
      {product ? (
        <div className="product-page">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} />
            {/* <img src={product.image} alt="Product Image" /> */}
          </div>
          <div className="product-details">
            <h2>{product.name}</h2>
            <h4>${product.price}</h4>
            <p>{product.description}</p>

            <Button disabled={buttonDisabled} onClick={handleClick}>
              {buttonText}
            </Button>
          </div>
        </div>
      ) : (
        <p style={{ marginTop: 100 }}>Nothing found</p>
      )}
    </>
  );
}
