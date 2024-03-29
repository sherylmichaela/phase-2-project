import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WishlistCard from "./WishlistCard";

export default function Wishlist({
  wishlistItems,
  removeFromWishlist,
  isLoading,
}) {
  return (
    <>
      {!isLoading ? (
        <>
          {wishlistItems.length > 0 ? (
            <Container>
              <h1 style={{ marginTop: 100 }}>Wishlist Items</h1>
              <br />
              <Row sm={1} md={2} lg={4} className="g-5">
                {wishlistItems.map((item, index) => {
                  return (
                    <Col>
                      <WishlistCard
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        item={item}
                        key={index}
                        removeFromWishlist={removeFromWishlist}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <p>Nothing in wishlist</p>
            </div>
          )}
        </>
      ) : null}
    </>
  );
}
