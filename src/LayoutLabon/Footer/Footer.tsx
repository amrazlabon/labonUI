import SVG from "@/CommonComponent/SVG";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="12" className="footer-copyright d-flex flex-wrap align-items-center justify-content-between">
            <p className="mb-0 f-w-600">Powered by <span><a href="https://labon.ai">Labon.ai</a></span></p>
            {/* <p className="mb-0 f-w-600">Hand crafted &amp; made with
              <SVG className="footer-icon" iconId="footer-heart" />
            </p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
