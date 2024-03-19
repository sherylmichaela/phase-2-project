// import { useState } from "react";
import { products } from "../../data.js";
import Products from "./Products";

export default function ProductPage() {
  return (
    <>
      <Products products={products} />
    </>
  );
}
