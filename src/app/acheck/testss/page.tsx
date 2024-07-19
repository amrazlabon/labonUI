'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
import BasicCard from "./BasicCard";
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";
import './patient-details.css'
// import { HeaderSearch } from "./HeaderSearch/HeaderSearch";
import { SearchBox } from "@/Layout/Header/SearchBox";
import BasicCardTest from "./BasicCardTest";
import Link from "next/link";
// import { Searchbar } from "./ReponsiveSearch/Searchbar";
// import { SearchBox } from "./HeaderSearch/SearchBox";

// import OpenModalMofi from ".";

const Tests = () => {

  const CustomTestListData = [
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
    // {
    //   id: 3,
    //   icon: "Gender - Other.png",
    //   text: "Send",
    // },
  ]

  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);
      
    return (
    <Col md='6'>
      <Card style={{backgroundColor:'#F5F5F5' , padding : '24px'}}>
      <h1 className="text-black ml-4 mt-4 " style={{margin:'24px', textAlign : 'left' }}>Tests</h1>


<BasicCard/>


{/* <div className="btn-group">
  <button className={"test-btn"}>Tests</button>
  <button className={"package-btn"}>Packages</button>
</div> */}
{/* <svg className='search-bg svg-color' >
      <use href={`/assets/svg/icon-sprite.svg#search`}></use>
    </svg> */}
<Input style={{padding:'10px',width:'100%',borderRadius:'15px',marginTop:'1rem' , marginBottom : '2rem'}} name="twitterUrl" value={''} type="url" placeholder={'Search'} />
  <Link href={'/acheck/booking1'}>
<div className="gap-4" style={{display : 'flex'}}>

{CustomTestListData.map(({ icon, id, text, defaultChecked }, index) => (
  

  <BasicCardTest/>
))}
</div>
</Link>
{/* <SearchBox /> */}

{/* <HeaderSearch/> */}

{/* <CustomHorizontalWizard differentId heading="Custom vertical wizard" horizontalWizardClass="vertical-options vertical-variations" firstXl={3} secondXl={9} /> */}

{/* <CardBody>
          <div className={`horizontal-wizard-wrapper vertical-options`}>
            <Row className="g-3">
              <Col xl={firstXl} xs={xs} className="main-horizontal-header">
                <NavComponent callbackActive={callback} activeTab={activeTab} />
              </Col>
              <Col xl={secondXl} xs={xs}>
                <CustomHorizontalWizardFormTabContent activeTab={activeTab} callbackActive={callback} differentId={differentId}/>
              </Col>
            </Row>
          </div>
        </CardBody> */}
{/* <CustomHorizontalWizardFormTabContent activeTab={1} callbackActive={callback} differentId={false}/> */}

        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Card>
        </Col>
    )
}

export default Tests;