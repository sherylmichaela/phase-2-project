import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Contact() {
  const [submitText, setSubmitText] = useState("Submit");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    setSubmitText("Form submitted!");
    setSubmitButtonDisabled(true);
  };

  return (
    <Container>
      <h1 style={{ marginTop: 100, marginBottom: 50, textAlign: "center" }}>
        Contact Form
      </h1>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6} style={{ alignContent: "center" }}>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Name:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="John Doe" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Email:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="john@email.com" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Contact:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="0412 345 678" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Enquiry:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  rows={6}
                  type="text"
                  placeholder="Please type in your enquiry here"
                />
              </Col>
            </Form.Group>
            <div className="text-center d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                style={{ marginTop: 25 }}
                disabled={submitButtonDisabled}
                onClick={handleSubmit}
              >
                {submitText}
              </Button>
            </div>
          </Form>
        </Col>
        <Col sm={3}></Col>
      </Row>
    </Container>
  );
}
