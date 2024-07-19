'use client'
import { ImagePath } from "@/Constant";
import { Col, Input, Label } from "reactstrap";

const SavePatients = () => {

    return (
        <Col md='6'>
        <h1>Save Data As</h1>
        <IconsRadio/>
        </Col>
    )

}

export default SavePatients;

const IconsRadio = () => {

    const CustomRadioListData = [
      {
        id: 1,
        icon: "Gender - Male.png",
        text: "My Profile",
        defaultChecked: true,
      },
      {
        id: 2,
        icon: "Gender - Female.png",
        text: "My Contacts",
      },
    //   {
    //     id: 3,
    //     icon: "Gender - Other.png",
    //     text: "9:00 AM",
    //   },
    //   {
    //     id: 1,
    //     icon: "Gender - Male.png",
    //     text: "9:30 AM",
    //     defaultChecked: true,
    //   },
    //   {
    //     id: 2,
    //     icon: "Gender - Female.png",
    //     text: "10:00 AM",
    //   },
    //   {
    //     id: 3,
    //     icon: "Gender - Other.png",
    //     text: "10:30 AM",
    //   },
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
                    <span>{text}</span>
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Col>
    );
  };