'use client'
import { FontSize, ImagePath } from "@/Constant";
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
  const TableHeadOptionBody = [
    {
      id: 1,
      test_date: "25/07/2024",
      lastName: "2 Tests",
      userName: "LBNHVB100420241",
      name : "Vasudevan Radakrishnan",
      timeslot_id: "07:00 AM"
    },
    {
      id: 2,
      test_date: "28/07/2024",
      lastName: "2 Tests",
      userName: "LBNHVB100420241",
      name : "Swathi Radakrishnan",
      timeslot_id: "07:00 AM"
    },
    {
      id: 3,
      test_date: "29/07/2024",
      lastName: "2 Tests",
      userName: "LBNHVB100420241",
      name : "Vasudevan Radakrishnan",
      timeslot_id: "07:00 AM"
    },
  ];
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
      setBookingInformation(TestResponse.data.test_data)
    }
    } catch (error) {
      setBookingInformation(TableHeadOptionBody)
      // setError(error.message);
    }
  };

    fetchData();
  }, []);
  return (
    <Col md='6' style={{padding : '24px'}}>
      <h1 className="text-black ml-4" style={{margin:'0' , paddingBottom : '24px'}}>My Booking Information</h1>
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
  console.log("the data informations ",bookingInformation);
  

  const handleRowClick = (data: any) => {
    // router.push({
    //   pathname: '/acheck/patient_details', 
    //   query: {
    //     b_id: data.id,
    //   },
    // });
    sessionStorage.setItem('order_id', JSON.stringify(data.id));

    console.log("handle click in the patient information",data)
  }
  // TableHeadOptions=()=> {

    const TableHeadOptionBody = [
      {
        id: 1,
        test_date: "25/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
      {
        id: 2,
        test_date: "28/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
      {
        id: 3,
        test_date: "29/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
    ];

    const formatDate = (isoString : any) => {
      const date = new Date(isoString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const getTestCount = (testId : any) => {
      if (typeof testId === 'string') {
        // Split the test_id by comma and filter out any empty strings
        const ids = testId.split(',').filter(id => id.trim() !== '');
        return ids.length;
      }
      return 0;
    };

  return (
    <Col sm="" style={{paddingRight : '0' , paddingLeft : '0'}}>
      <Card style={{boxShadow : 'none' , margin : '0'}}> 
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12" style={{paddingLeft : '16px' , paddingRight : '16px'}}>
          {bookingInformation.length > 0 ? (

          <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
                {bookingInformation.map((data : any) => (
                  <tr style={{ cursor: 'pointer' }} key={data.id} onClick={() => handleRowClick(data)}>
                    {/* <th scope="row">{data.id}</th> */}
                    <td style={{paddingTop : '0'}}>
          <img style={{height:'3rem', margin:'0' , borderRadius : '5px'}} className="img-fluid table-avtar" src={`${ImagePath}/ThumbnailTest.png`} alt="user image" />
          {/* {data.lastName} */}
                      </td>
                    <td>
                    <div style={{display : 'grid'}}>
                    <p style={{ paddingTop: '0', margin: '0' , fontSize : '16px' , fontWeight : '600' }}>
                            {formatDate(data.test_date)}
                          </p>
                      <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />
  
                      <p style={{paddingTop : '0' , margin : '0'}}>
                      
                      {getTestCount(data.test_id)} Test
                      </p>
                      </div>
                      <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" />
                      <p style={{paddingTop : '0', margin : '0'}}> 
  
                      {data.time_slot}
                      </p>
                      </div>
                      <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/VectorProfile.png`} alt="user image" />
                      <p style={{paddingTop : '0', margin : '0'}}>
  
                      {data.name}
                      </p>
                      </div>
                      <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Order No..png`} alt="user image" />
                      <p style={{paddingTop : '0', margin : '0'}}>
  
                      LBNHVB10042024{data.id}
                      </p>
                      </div>
                      <div className="gap-2" style={{display : 'flex', marginTop : '4px'}}>
                      {/* <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" /> */}
                      <p style={{background: 'rgba(101, 196, 102, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '5rem' , margin : '0'}}>{data.status}</p>
  
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
          ) : (
            <p>There are no booked tests</p>
          )}
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
      <Col sm="12" xl="12" style={{paddingBottom : '24px'}}>
        <Card style={{backgroundColor : '#E5E5E5' , boxShadow : 'none' , margin : '0'}}>
          {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
          <CardBody>
            <div style={{display : 'flex'}}>
  
          <img style={{height:'25px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" />
  
            <p className="mb-0" style={{fontSize : '14px'}}>
            Click on a booking to view the details. You can reschedule an upcoming booking by going to the booking details.
  
              {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
            </p>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  };