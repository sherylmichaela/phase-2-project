// import { useState } from "react";
import { products } from "../../data.js";
import ProductList from "./ProductList.js";
import Container from "react-bootstrap/Container";
// import "./ProductPage.css";

export default function ProductPage() {
  return (
    <>
      <Container>
        <h1 className="productpage-header" style={{ marginTop: 50 }}>
          Products
        </h1>
        <br />
        <ProductList products={products} />
      </Container>
    </>
  );
}
