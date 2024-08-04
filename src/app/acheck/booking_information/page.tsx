'use client'
import { ImagePath } from "@/Constant";
import { TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import { CommonTableProp } from "@/Types/TableType";
import { Card, CardBody, Col, Row, Table } from "reactstrap";
// import './patient-details.css'
import Link from "next/link";
// import { useBooking } from "./context";
import router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";


const BookingInformation = () => {
  const [bookingInformation , setBookingInformation] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
    // const booking_id = sessionStorage.getItem('booking_id');
    const user_id = sessionStorage.getItem('user_id');
    if(user_id){


      // const response = await axios.get(`/api/patient_info?endpoint=per&id=${booking_id}`);
      const TestResponse = await axios.get(`/api/orders?endpoint=user&id=${user_id}`);
      // setData(response.data);
      console.log("the test iformation of contacrs",TestResponse.data);
      // setPatientInformation(response.data)
      setBookingInformation(TestResponse.data)
    }
    } catch (error) {
      // setError(error.message);
    }
  };

    fetchData();
  }, []);
  return (
    <Col md='6' style={{padding : '24px'}}>
      <h1 className="text-black ml-4 mt-4" style={{margin:'0' , paddingBottom : '24px'}}>My Booking Information</h1>
<BasicCard/>

    {/* <div className="btn-group">
<button className={"test-btn"}>Upcoming</button>
<button className={"package-btn"}>Completed</button>
</div> */}
<Link href={'/acheck/test_details'}>
      <TableHeadOptions bookingInformation={bookingInformation}/>
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

const TableHeadOptions=({bookingInformation} : any)=> {

  // const { setBookingData } = useBooking();

  const handleRowClick = (data: any) => {
    // router.push({
    //   pathname: '/acheck/patient_details', 
    //   query: {
    //     b_id: data.id,
    //   },
    // });
    sessionStorage.setItem('booked_test', JSON.stringify(data));

    console.log("handle click in the patient information",data)
  }
  // TableHeadOptions=()=> {

    const TableHeadOptionBody = [
      {
        id: 1,
        firstName: "25/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
      {
        id: 2,
        firstName: "28/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
      {
        id: 3,
        firstName: "29/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
    ];

  return (
    <Col sm="" style={{paddingRight : '0' , paddingLeft : '0'}}>
      <Card > 
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
              {bookingInformation.map((data : any) => (
                <tr style={{ cursor: 'pointer' }} key={data.id} onClick={() => handleRowClick(data)}>
                  {/* <th scope="row">{data.id}</th> */}
                  <td>
        <img style={{height:'4rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />
        {/* {data.lastName} */}
                    </td>
                  <td>
                  <div style={{display : 'grid'}}>
                    <h4 style={{paddingTop : '16px', margin : '0'}}>
                      {data.test_date}
                    </h4>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {data.lastName}1 Test
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" />
                    <p style={{paddingTop : '0', margin : '0'}}> 

                    {data.timeslot_id}
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Order No..png`} alt="user image" />
                    <p style={{paddingTop : '0', margin : '0'}}>

                    LBNHVB10042024{data.id}
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    {/* <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" /> */}
                    <p style={{paddingTop : '0', margin : '0'}}>

                    Status
                    </p>
                    </div>
                  </div>
                  </td>
                  <td>
                    <i className='fa fa-angle-right'></i>
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