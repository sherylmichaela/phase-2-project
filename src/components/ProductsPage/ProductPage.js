// import { useState } from "react";
import { products } from "../../data.js";
import ProductList from "./ProductList.js";
import Container from "react-bootstrap/Container";

export default function ProductPage() {
  return (
    <>
      <Container>
        <h1>Products</h1>
        <ProductList products={products} />
      </Container>
    </>
  );
}
