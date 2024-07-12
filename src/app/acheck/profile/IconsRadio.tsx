import { Col, Input, Label } from "reactstrap";
import { IconsRadios } from "@/Constant";
import { CustomRadioList } from "@/Data/Form&Table/Form";
import {  ImagePath } from "@/Constant";

export const IconsRadio = () => {

  const CustomRadioListData = [
    {
      id: 1,
      icon: "Gender - Male.png",
      text: "Hidden",
      defaultChecked: true,
    },
    {
      id: 2,
      icon: "Gender - Female.png",
      text: "Folder",
    },
    {
      id: 3,
      icon: "Gender - Other.png",
      text: "Send",
    },
  ]
  return (
    <Col xl="12" sm="12" className="order-xl-0 order-sm-1">
      <div className=" h-100 checkbox-checked">
        {/* <h6 className="sub-title">{IconsRadios}</h6> */}
        <div className="form-check radio radio-primary ps-0">
          <ul className="radio-wrapper">
            {/* <li className="p-1 pt-2 pb-2">
              <Input id="radio-icon" className="d-block" type="radio" name="radio2"/>
              <Label htmlFor="radio-icon" check>
                <i className="fa fa-sliders"></i><span>Sliders</span>
              </Label>
            </li> */}
            {CustomRadioListData.map(({ icon, id, text, defaultChecked }, index) => (
              <li className="p-1 pt-2 pb-2" key={index}>
                <Input className="checkbox-shadow d-block" id={`radio-${id}`} type="radio" defaultChecked={defaultChecked} name="radio2" />
                <Label htmlFor={`radio-${id}`} check>
                <img style={{ height: '100%', }} className="img-fluid table-avtar" src={`${ImagePath}/${icon}`} alt="user image" />

                  {/* <i className={`fa fa-${icon}`}></i> */}
                  {/* <span>{text}</span> */}
                </Label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
};
