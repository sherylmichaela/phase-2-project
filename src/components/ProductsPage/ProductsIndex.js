import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

export default function ProductIndex() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
