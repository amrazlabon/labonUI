//@ts-nocheck
import { useState } from "react";
import { Accordion, Card, CardBody, Col } from "reactstrap";
// import CommonAccordionItem from "../Common/CommonAccordionItem";
import { StaticAccordion } from "./StaticAccordion";
import { SimpleAccordions } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AccordionData, AccordionList } from "@/Data/Uikits/accordion";
import CommonAccordionItem from "./CommonAccordionItem";

export const SimpleAccordion = ({selectedTests} : any) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => (open === id ? setOpen() : setOpen(id));

  return (
    <Col sm="12" xl="12">
      <Card className="basic-accordion" style={{margin : '0' , boxShadow : 'none'}}>
        {/* <CommonCardHeader title={SimpleAccordions} span={AccordionData} /> */}
        <CardBody style={{padding : '0'}}>
          <Accordion open={open} toggle={toggle} className="dark-accordion">  
            {/* <StaticAccordion /> */}
            {selectedTests.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};
