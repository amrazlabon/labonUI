import SVG from "@/CommonComponent/SVG";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer" style={{margin : '0', backgroundColor : '#F5F5F5', boxShadow : 'none'}}>
      <Container fluid>
        <Row>
          {/* <Col md="12" className="footer-copyright d-flex flex-wrap align-items-center justify-content-between"> */}
          <Col md="12" className="footer-copyright align-items-center justify-content-between">


            <p className="mb-0 f-w-400" style={{textAlignLast : 'center' , fontSize : '12px' , color : 'rgba(153, 153, 153, 1)'}}>Powered by <span><a className="f-w-400" style={{textAlignLast : 'center' , fontSize : '12px' , color : 'rgba(29, 15, 143, 1)'}} href="https://labon.ai">Labon.ai</a></span></p>
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
