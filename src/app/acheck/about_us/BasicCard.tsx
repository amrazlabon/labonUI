import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicCards } from "@/Constant";
import { BasicCardData } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";
import {  ImagePath } from "@/Constant";

const BasicCard = () => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : '#E5E5E5' , boxShadow : 'none'}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>
          <div style={{display : 'flex'}}>

        <img style={{height:'25px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" />

          <p className="mb-0" style={{fontSize : '14px'}}>
          {/* Labon is a service provider enabling patients to book blood tests at home, whereas, we are a technology provider for labs who enables them to connect instantly with their customers, enhancing their sales channels. */}
          Is a service provider enabling patients to book blood tests at home, whereas, we are a technology provider for labs who enables them to connect instantly with their customers, enhancing their sales channels.
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCard;
