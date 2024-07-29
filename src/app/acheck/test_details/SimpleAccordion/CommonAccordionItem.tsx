//@ts-nocheck
import { ChevronDown } from "react-feather";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

const CommonAccordionItem = ({ item }) => {
  return (
    <AccordionItem className={item.accordionItemClass}>
      <AccordionHeader targetId={item.id} className={item.accordionHeaderClass}>
        {item.iconWithTitle && item.iconWithTitle}
        {/* <span className={item.spanClass}> */}
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        {/* <span style={{ display: "block", width: 195, textAlign: "left" }}>{item.accordionHeading}</span> */}
        <span style={{ display: "block", width: 195, textAlign: "left" }}>LDL Cholesterol</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 95, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 }}>$6100.00</span>
      </div>
        {item.icon && <ChevronDown className={`svg-color ${item.spanClass}`} />}
          {/* {item.accordionHeading} */}
          {/* </span> */}
      </AccordionHeader>
      <AccordionBody accordionId={item.id}>{item.bodyText}</AccordionBody>
    </AccordionItem>
  );
};

export default CommonAccordionItem;
