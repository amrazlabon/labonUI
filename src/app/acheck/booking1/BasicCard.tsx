import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicCards } from "@/Constant";
import { BasicCardData } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";
import {  ImagePath } from "@/Constant";

const BasicCard = () => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  
  return (
    <Col xs='4' sm="4" md='4' xl="4">
      <Card style={{backgroundColor : '#F2EAF9'}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>
          <div>

        {/* <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}

          <p className="mb-0">
          Check

            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
          <p className="mb-0">
          Done

            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCard;
