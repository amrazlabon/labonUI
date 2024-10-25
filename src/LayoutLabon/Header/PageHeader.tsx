import { Col, Row } from "reactstrap";
import { Searchbar } from "./ReponsiveSearch/Searchbar";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderRight } from "./HeaderRight";
import './profileStyle.css'

export const PageHeader = () => {
  return (
    <Col className="header-wrapper m-0 my-element" style={{padding : '0' , boxShadow : 'none'}}>
      <Row style={{padding : '24px'}}>
        <Searchbar />
        <HeaderLogo />
        <HeaderRight/>
      </Row>
    </Col>
  );
};
