'use client'
import { ImagePath } from "@/Constant";
import { TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import { CommonTableProp } from "@/Types/TableType";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "reactstrap";


const PatientInformation = () => {

  const [patientInformation , setPatientInformation] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
      const id = sessionStorage.getItem('user_id');
      const response = await axios.get(`/api/patient_info?endpoint=user&id=${id}`);
        // setData(response.data);
        const sortedData = response.data.sort((a : any, b : any) => b.id - a.id); // Sorts in ascending order
        console.log("the patient iformation of contacrs",response.data);
        setPatientInformation(sortedData)
      } catch (error) {
        const TableHeadOptionBody = [
          {
            id: 1,
            first_name: "Vasudevan Ramachandran",
            relation: "Father",
            userName: "5 tests done so far",
            time: "No upcoming tests"
          },
          {
            id: 2,
            first_name: "Swathi Ramachandran",
            relation: "Mother",
            userName: "5 tests done so far",
            time: "No upcoming tests"
          },
          {
            id: 3,
            first_name: "Sowmya Ramachandran",
            relation: "Sister",
            userName: "5 tests done so far",
            time: "No upcoming tests"
          },
        ];
        console.log("coming till here");
        
        setPatientInformation([])
        // setError(error.message);
      }
    };

    fetchData();
  }, []);

  const router = useRouter(); // Initialize the router

  const goBack = () => {
    router.back(); // Go back to the previous route
  };
  
  return (
    <Col md='6' >

<div style={{padding : '0', height:'6rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
<div style={{display : 'flex'}}>
<i onClick={goBack} className='fa fa-angle-left' style={{padding:'24px 0 24px 24px', fontSize : '24px' , color : 'white'}}></i>
<h1 className="text-white" style={{padding:'24px', margin: '0'}}>My Contacts</h1>
        </div>
<div style={{padding : '0', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>
</div>
<div style={{padding : ' 0 24px 24px 24px'}}>

<Link href={'/acheck/patient_details'}>
      <TableHeadOptions patientInformation={patientInformation}/>
</Link>
</div>


    </Col>
  )


}

export default PatientInformation;


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

const TableHeadOptions=({patientInformation} : any)=> {
  // TableHeadOptions=()=> {
  // const router = useRouter();

  const handleRowClick = (data: any) => {
    // router.push({
    //   pathname: '/acheck/patient_details', 
    //   query: {
    //     b_id: data.id,
    //   },
    // });
    sessionStorage.setItem('patient_id', JSON.stringify(data.id));

    console.log("handle click in the patient information",data)
  }

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
        firstName: "Swathi Ramachandran",
        lastName: "Mother",
        userName: "5 tests done so far",
        time: "No upcoming tests"
      },
      {
        id: 3,
        firstName: "Sowmya Ramachandran",
        lastName: "Sister",
        userName: "5 tests done so far",
        time: "No upcoming tests"
      },
    ];

  return (
    <Col sm="" style={{paddingRight : '0' , paddingLeft : '0'}}>
      <Card style={{boxShadow : 'none' , margin : '0'}}>
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12" style={{paddingLeft : '16px' , paddingRight : '16px'}}>
          {patientInformation.length > 0 ? (
              <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
                {patientInformation.map((data: any) => (
                  <tr style={{ cursor: 'pointer' }} key={data.id} onClick={() => handleRowClick(data)}>
                    <td style={{paddingTop : '0'}}>
                      <img style={{ height: '3rem', margin: '0'  , borderRadius : '5px'}} className="img-fluid table-avatar" src={`${ImagePath}/Father.png`} alt="user image" />
                    </td>
                    <td>
                      <div style={{ display: 'grid' }}>
                        <p style={{ paddingTop: '0', margin: '0' , fontSize : '16px' , fontWeight : '600' }}>
                          {data.first_name}
                        </p>
                        <div className="gap-1" style={{ display: 'flex' , marginTop : '4px'}}>
                          <img style={{ height: '1rem', margin: '0'  ,}} className="img-fluid table-avatar" src={`${ImagePath}/Icon-Relation.png`} alt="user image" />
                          <p style={{ paddingTop: '0', margin: '0' , fontSize : '14px' }}>
                            {data.relation}
                          </p>
                        </div>
                        <div className="gap-1" style={{ display: 'flex' , marginTop : '4px' }}>
                          <img style={{ height: '1rem', margin: '0' }} className="img-fluid table-avatar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />
                          <p style={{ paddingTop: '0', margin: '0'  , fontSize : '14px'}}>
                            0 tests done so far
                          </p>
                        </div>
                        <div className="gap-1" style={{ display: 'flex' , marginTop : '4px'}}>
                          <img style={{ height: '1rem', margin: '0' }} className="img-fluid table-avatar" src={`${ImagePath}/Icon - Clock.png`} alt="user image" />
                          <p style={{ paddingTop: '0', margin: '0' , fontSize : '14px' , color  :'rgba(196, 107, 101, 1)' }}>
                            No upcoming tests
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <i className="fa fa-angle-right"></i>
                    </td>
                  </tr>
                ))}
              </CommonTable>
            ) : (
              <p>There are no saved contacts</p>
            )}
          </Col>
        </Row>
      </Card>
    </Col>
  );
}