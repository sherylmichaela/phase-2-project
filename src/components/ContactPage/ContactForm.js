import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import "./ContactForm.css";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [submitText, setSubmitText] = useState("Submit");
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setValidated(true);
      setSubmitText("Form submitted!");
      setDisableSubmitBtn(true);

      // console.log("Form submitted!");

      // Reset state variables
      // setTimeout(() => {
      //   form.reset();
      //   setValidated(false);
      //   setSubmitText("Submit");
      //   setDisableSubmitBtn(false);
      // }, 100); // Reset after 2 seconds
    }
    setValidated(true);
  };

  return (
    <div className="general">
      <Col sm={4}>
        <h1 className="contact-form-header">Contact Form</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>First Name*</Form.Label>
              <Form.Control required type="text" placeholder="John" />
              {/* <Form.Control.Feedback type="invalid"></Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control required type="text" placeholder="Doe" />
              {/* <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback> */}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="johndoe@mail.com"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" placeholder="0412 345 678" required />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Subject*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Availability"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a subject.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Enquiry*</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                type="text"
                placeholder="Please type in your enquiry here"
                maxLength={400}
                required
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="text-center d-grid gap-2">
            <Button
              type="submit"
              className="mt-3 mb-3"
              size="lg"
              disabled={disableSubmitBtn}
            >
              {submitText}
            </Button>
          </div>
        </Form>
      </Col>
    </div>
  );
}
