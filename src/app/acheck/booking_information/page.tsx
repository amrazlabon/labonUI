import { ImagePath } from "@/Constant";
import { TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import { CommonTableProp } from "@/Types/TableType";
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import './patient-details.css'
import Link from "next/link";


const BookingInformation = () => {
  return (
    <Col md='6' style={{padding : '24px'}}>
      <h1 className="text-black ml-4 mt-4" style={{margin:'0' , paddingBottom : '24px'}}>My Booking Information</h1>
<BasicCard/>

    {/* <div className="btn-group">
<button className={"test-btn"}>Upcoming</button>
<button className={"package-btn"}>Completed</button>
</div> */}
<Link href={'/acheck/test_details'}>
      <TableHeadOptions/>
</Link>
    </Col>
  )


}

export default BookingInformation;


const CommonTable :React.FC<CommonTableProp>= ({ tableClass, strip, caption, size, hover, headClass, headRowClass, headData, children }) => {
  return (
    <div className={`table-responsive theme-scrollbar ${tableClass ? tableClass : ""}`}>
      <Table striped={strip} hover={hover} size={size}>
        {caption && <caption>{caption}</caption>}
        {/* <thead className={headClass}>
          <tr className={headRowClass}>
            {headData.map((head) => (
              <th key={head.id} scope="col">
                {head.head}
              </th>
            ))}
          </tr>
        </thead> */}
        <tbody>{children}</tbody>
      </Table>
     </div>
  );
};

const TableHeadOptions=()=> {
  // TableHeadOptions=()=> {

    const TableHeadOptionBody = [
      {
        id: 1,
        firstName: "25/07/2024",
        lastName: "2 Tests",
        userName: "Vasudevan Ramachandran",
        time: "07:00 AM"
      },
      {
        id: 2,
        firstName: "28/07/2024",
        lastName: "2 Tests",
        userName: "Swathi Ramachandran",
        time: "07:00 AM"
      },
      {
        id: 3,
        firstName: "29/07/2024",
        lastName: "2 Tests",
        userName: "Myself",
        time: "07:00 AM"
      },
    ];

  return (
    <Col sm="">
      <Card>
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
              {TableHeadOptionBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>
        <img style={{height:'4rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />
        {/* {data.lastName} */}
                    </td>
                  <td>
                  <div style={{display : 'grid'}}>
                    <h4>
                      {data.firstName}
                    </h4>
                    <p style={{marginTop:'1rem'}}>

                    {data.lastName}
                    </p>
                    <p>

                    {data.userName}
                    </p>
                    <p>

                    {data.time}
                    </p>
                  </div>
                  </td>
                  <td>
                    <i className={`fa fa-angle-right`}></i>
                    {/* {data.userName} */}
                    </td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

  const BasicCard = () => {
    const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
    const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";
  
    return (
      <Col sm="12" xl="12">
        <Card style={{backgroundColor : '#E5E5E5'}}>
          {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
          <CardBody>
            <div style={{display : 'flex'}}>
  
          <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" />
  
            <p className="mb-0">
            Click on a booking to view the details. You can reschedule an upcoming booking by going to the booking details.
  
              {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
            </p>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  };