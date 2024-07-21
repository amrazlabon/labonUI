import { Col, Row } from "reactstrap";
import { Searchbar } from "./ReponsiveSearch/Searchbar";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderRight } from "./HeaderRight";

export const PageHeader = () => {
  return (
    <Col className="header-wrapper m-0" style={{padding : '0'}}>
      <Row style={{padding : '24px'}}>
        <Searchbar />
        <HeaderLogo />
        <HeaderRight/>
      </Row>
    </Col>
  );
};
