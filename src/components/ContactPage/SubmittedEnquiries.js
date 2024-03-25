import Container from "react-bootstrap/Container";
// import { useState, useEffect } from "react";

export default function SubmittedEnquiries({ enquiries }) {
  return (
    <Container>
      <h1 style={{ marginTop: 100 }}>Submitted Forms</h1>
      {/* {enquiries.length > 0 ? (
        <ul>
          {enquiries.map((enquiry) => {
            return (
              <li key={enquiry.id}>
                <Link to={`/contact/${enquiry.id}`}>{enquiry.subject}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No forms submitted</p>
      )} */}
    </Container>
  );
}
