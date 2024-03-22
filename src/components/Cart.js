// import { useState } from "react";
// import { products } from "../data.js";
// import { CartProvider } from "react-use-cart";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useCart } from "react-use-cart";

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  const { cartTotal } = useCart();

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
      <h1 style={{ marginTop: 100, marginBottom: 50 }}>
        Cart ({totalUniqueItems})
      </h1>
      <Table className="text-center align-middle">
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>

            <th>Quantity</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt="product-img"
                    style={{ height: "6rem" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <Button
                    variant="primary"
                    style={{ marginRight: 15, marginBottom: 6 }}
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>

                  <Form.Control
                    type="text"
                    value={item.quantity}
                    style={{ width: "50px" }}
                    className="d-inline-block text-center"
                    readOnly
                  />

                  <Button
                    variant="primary"
                    style={{ marginLeft: 15, marginBottom: 6 }}
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    className="ms-2"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{ textAlign: "right" }}>
        <h2>Total: ${cartTotal}</h2>
        <br />
        <Button variant="primary" style={{ marginTop: "-20px" }}>
          Click to Checkout
        </Button>
      </div>
    </Container>
  );
}
