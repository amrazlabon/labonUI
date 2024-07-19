import { ImagePath } from "@/Constant";
import { TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import { CommonTableProp } from "@/Types/TableType";
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import './patient-details.css'


const BookingInformation = () => {
  return (
    <Col md='6'>
      <h1 className="text-black ml-4 mt-4" style={{margin:'2rem'}}>My Booking Information</h1>
<BasicCard/>

      <div className="btn-group">
  <button className={"test-btn"}>Upcoming</button>
  <button className={"package-btn"}>Completed</button>
</div>
      <TableHeadOptions/>
    </Col>
  )


}

export default BookingInformation;


const CommonTable :React.FC<CommonTableProp>= ({ tableClass, strip, caption, size, hover, headClass, headRowClass, headData, children }) => {
  return (
    <div className={`table-responsive theme-scrollbar ${tableClass ? tableClass : ""}`}>
      <Table striped={strip} hover={hover} size={size}>
        {caption && <caption>{caption}</caption>}
        <thead className={headClass}>
          <tr className={headRowClass}>
            {headData.map((head) => (
              <th key={head.id} scope="col">
                {head.head}
              </th>
            ))}
          </tr>
        </thead>
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
          firstName: "Vasudevan Ramachandran",
          lastName: "Father",
          userName: "5 tests done so far",
          time: "No upcoming tests"
        },
        {
          id: 2,
          firstName: "HDL Cholesterol",
          lastName: "Mother",
          userName: "5 tests done so far",
          time: "No upcoming tests"
        },
        {
          id: 3,
          firstName: "LDL Cholesterol",
          lastName: "Sister",
          userName: "5 tests done so far",
          time: "No upcoming tests"
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
          <img style={{height:'4rem', margin:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />
          {/* {data.lastName} */}
                      </td>
                    <td>
                    <div style={{display : 'grid'}}>
                      <h3>
                        {data.firstName}
                      </h3>
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
                      <i className={`icon-arrow-right`}></i>
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