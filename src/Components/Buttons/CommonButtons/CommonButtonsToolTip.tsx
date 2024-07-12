import { useState } from "react";
import { Tooltip } from "reactstrap";

const CommonButtonsToolTip = ({ id, toolTipText }: { id: string; toolTipText: string }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Tooltip isOpen={tooltipOpen} target={id} toggle={toggle}>
      {toolTipText}
    </Tooltip>
  );
};

export default CommonButtonsToolTip;
