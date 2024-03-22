// import { useState } from "react";
// import { products } from "../data.js";
// import { CartProvider } from "react-use-cart";
import Container from "react-bootstrap/Container";
import { useCart } from "react-use-cart";

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <p>Your cart is empty</p>
      </div>
    );

  return (
    <Container>
      <h1 style={{ marginTop: 50 }}>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
