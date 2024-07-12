'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import BasicCard from "./BasicCard";
import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
import NavComponent from "./NavComponent";
import CustomHorizontalWizard from ".";

// import OpenModalMofi from ".";

const Tests = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);
      
    return (
    <Col >
      <Card style={{backgroundColor:'#F5F5F5'}}>
      <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1>

<BasicCard/>

<CustomHorizontalWizard differentId heading="Custom vertical wizard" horizontalWizardClass="vertical-options vertical-variations" firstXl={3} secondXl={9} />

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