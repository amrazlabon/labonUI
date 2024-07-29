'use client'
import { ImagePath } from "@/Constant";
import { TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import { CommonTableProp } from "@/Types/TableType";
import Link from "next/link";
import { Card, Col, Row, Table } from "reactstrap";


const PatientInformation = () => {
  return (
    <Col md='6' >

<div style={{padding : '0', height:'6rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
<h1 className="text-white" style={{padding:'24px', margin: '0'}}>My Contacts</h1>
<div style={{padding : '0', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>
</div>
<div style={{padding : '24px'}}>

<Link href={'/acheck/patient_details'}>
      <TableHeadOptions/>
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
      <Card>
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
              {TableHeadOptionBody.map((data) => (
                <tr key={data.id}>
                  {/* <th scope="row">{data.id}</th> */}
                  <td>
        <img style={{height:'4rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />
        {/* {data.lastName} */}
                    </td>
                  <td>
                  <div style={{display : 'grid'}}>
                    <h4 style={{paddingTop : '16px', margin : '0'}}>
                      {data.firstName}
                    </h4>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon-Relation.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {data.lastName}
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />
                    <p style={{paddingTop : '0', margin : '0'}}> 

                    {data.userName}
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" />
                    <p style={{paddingTop : '0', margin : '0'}}>

                    {data.time}
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