"use client"
import React, { useEffect, useState } from 'react';
// import { StepsExperience, StepsFresher, TypeObject } from '@/constants';
import { useSearchParams } from 'next/navigation';
// import Steppers from './stepper';
// import StepperSwitch from '.';
import Image from 'next/image';
import addBanner from '@/assets/banner.png'
// import { citiesAPI, educationAPI, experienceAPI, positionAPI, salaryAPI } from '@/helpers/dropDownApis';
import Steppers from '.';
import StepperSwitch from './stepperSwitch';
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
// import useBlockNavigation from '@/Redux/routeRestrictHook';

interface FormValue {
    name: string;
    email: string | boolean;
    gender: string;
    dob: Date | null | string | number;
    city: string;
    mobile: string;
    country_code: string;
    alternate_mobile: string;
    alternate_country_code: string;
    alternate_country: string;
    country: string;
    pincode: string;
    location: string;
    address: string;
    age: string | number;
    timeslot: string | number;
    date: string;
    relation: string;
    tests: string | number;
    workInCities: [] ;
    test_data: [] ;
    address_data: [] ;
    co_ordinates : {}
    nick_name: string;
    patient_id: string;
    timeslot_id: string;
    user_id: string;
    test_id: string;
    // companyName: string;
    brandName: string;
    currentWorkingCity: string;
    monthlySalary: string | number;
    workExperience: string | number;
    department: string;
    subCategory: string;
    position: string;
    internshipRequire: string;
    theme: string;
    themeColor: string;
    profileImage: string;
}

type Test = {
    id: number;
    test_name: string;
    is_active: boolean;
    questions: any;
    price: string | null;
  };

  type Location = {
    // id: number;
    location: string;
    address: string;
    pincode: any;
    nick_name: string | null;
    co_ordinates : {}
  };

const Page = () => {

  // this is using in the restrict clicks 
  // const [isTaskIncomplete, setIsTaskIncomplete] = useState(true); // Set to true while task is incomplete

  // // Call the hook to block navigation when task is incomplete
  // useBlockNavigation(isTaskIncomplete);

  
  const [fullScreen, setFullScreen] = useState(false);
    
    const [stepActive, setStepActive] = useState<number>(0);
    // const [registerData, setRegisterData] = useState([]);
    // const [cities, setCities] = useState<string[]>([]);
    // const [education, setEducation] = useState<string[]>([])
    // const [experience, setExperience] = useState<string[]>([])
    // const [salary, setSalary] = useState<string[]>([])
    // const [category , setCategory] =useState<string[]>([])
    const searchParams = useSearchParams();
    // const userType = searchParams.get('type');
    const userTheme = searchParams.get('theme');
    const userThemeColor = searchParams.get('color');
    
    
      const [selectedTests, setSelectedTests] = useState<Test[]>([]);
        const [selectedAddress, setSelectedAddress] = useState<Location[]>([]);
    
    // const menuItems = userType === 'experience' ? StepsExperience : StepsFresher;
    const [profile, setProfile] = useState<FormValue>({
        name: '',
        email: '',
        gender: '',
        dob: '',
        city: '',
        mobile: '',
        country_code: '+91',
    alternate_mobile: '',
    alternate_country_code: '+91',
    alternate_country: 'IND',
    country: 'IND',
        pincode: '',
        location: '',
        address: '',
        age: 0,
        timeslot: '',
        date: '',
        relation: '',
        tests: '',
        address_data: [],
        co_ordinates : {},
        test_data: [],
        workInCities: [],
        nick_name: '',
        patient_id : '',
        timeslot_id : '',
        test_id:'',
        user_id:'',
        brandName: '',
        currentWorkingCity: '',
        monthlySalary: '',
        workExperience: '',
        department: '',
        subCategory: '',
        position: '',
        internshipRequire: '',
        theme: String(userTheme),
        themeColor: String(userThemeColor),
        profileImage:''
    })
    
    console.log("the profile value in the stepper",profile);
    useEffect(() => {
        const tests = sessionStorage.getItem('tests');
        const userId = JSON.parse(sessionStorage.getItem('user_id') || 'null');
    const address = sessionStorage.getItem('address');

    if (tests) {
      const parsedTests = JSON.parse(tests);

      setSelectedTests(JSON.parse(tests));
      setProfile(prevProfile => ({
        ...prevProfile,
        test_data: parsedTests
    }));
    }
    if (userId) {
      const parsedTests = userId;

      // setSelectedTests(JSON.parse(tests));
      setProfile(prevProfile => ({
        ...prevProfile,
        user_id: parsedTests
    }));
    }
    if (address) {
      const parsedAddress = JSON.parse(address);
      setProfile(prevProfile => ({
        ...prevProfile,
        address_data: parsedAddress,
        address : parsedAddress[0].address,
        pincode : parsedAddress[0].pincode,
        location : parsedAddress[0].location,
        nick_name : parsedAddress[0].nick_name,
        co_ordinates : parsedAddress[0].co_ordinates,
    }));
      setSelectedAddress(JSON.parse(address));
    }
        // citiesAPI().then((cities: string[]) => {
        //     const uniqueCities = cities.filter((value, index, self) => self.indexOf(value) === index);
        //     setCities(uniqueCities);
        // });
        // educationAPI().then((education) => setEducation(education))
        // experienceAPI().then((experience) => setExperience(experience))
        // salaryAPI().then((salary) => setSalary(salary))
        // positionAPI().then((position)=>{ setCategory(position.result) }) 
    }, [])

    const goBack =() => { 

      setStepActive(stepActive - 1)
    }

    const handleAddToCartClick = () => {
      setFullScreen(true); // or false, depending on what you want to do
    };


    return (
        <Col md='' >
      <div style={{padding : '0', height:'auto', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
        <Col sm='6' md='' lg=''>
<Steppers stepActive={stepActive} setStepActive={setStepActive} />
        </Col>
        <div style={{display : 'flex'}}>
{(stepActive === 1 || stepActive === 2 || stepActive === 3) && (
  <i onClick={goBack} className='fa fa-angle-left' style={{padding:'24px 0 24px 24px', fontSize : '24px' , color : 'white'}}></i>
  // <p  style={{color : 'white'}}>Back</p>
  )
}<h1 className="text-white"  style={{padding:'24px', margin: '0'}}>Home Visit Booking</h1>
        </div>
{/* <div>
  <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>Glucose</p>
  <h2 className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>1100.00</h2>
</div> */}
<div style={{ display: 'flex', alignItems: 'center' , paddingBottom : '0'}}>
  <div style={{ flex: 1, display: 'flex', justifyContent: '' }}>
    
  {selectedTests && (stepActive === 1 || stepActive === 2 || stepActive === 0) &&(<div>
  <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>{selectedTests.length === 0
        ? 'Test'
        : selectedTests.length === 1
        ? selectedTests[0].test_name
        : `${selectedTests[0].test_name} + ${selectedTests.length - 1}`}</p>
  <p className="text-white custom-font" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>
    {/* 1100.00 */}
    <span style={{marginRight : '4px'}}><i className='fa fa-rupee'></i></span>
    {selectedTests.length === 0
                  ? '500'
                  : selectedTests.length === 1
                  ? `${selectedTests[0].price}`
                  : `${selectedTests.reduce((total, test) => total + (test.price ? parseFloat(test.price) : 0), 0)}`
                }.00
    </p>
</div> )
}
  </div>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'bottom' ,paddingRight : '24px'}}>
                  {stepActive == 3 && 
                    <Button onClick={handleAddToCartClick} className='btn-lg' style={{height: '3rem', width :'12rem' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '1.3rem'}} color="">Add To Cart</Button>
}
      <div style={{marginTop : '2rem'}}>
                    {profile.timeslot && (stepActive === 1 || stepActive === 2 || stepActive === 0) &&(
                        <p className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>Time : {profile.timeslot}</p>
                    )}
                    {profile.date && (stepActive === 1 || stepActive === 2 || stepActive === 0) && (

                        <p className="text-white" style={{paddingBottom:'0',paddingLeft : '24px', margin: '0'}}>Date : {profile.date}</p>
                    )}
</div>

  </div>
</div>
<div style={{marginTop : '15px', height:'24px', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>
</div>
        {/* <div className='p-10 '>
            <div className='shadow-md bg-[#002351] pb-8 pl-4 mb-4 pt-4'> */}
            {/* </div>
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 p-8">
                    <Image src={addBanner} width={500} height={150} alt='' />
                </div> */}
                <StepperSwitch
                    stepActive={stepActive}
                    setStepActive={setStepActive}
                    profile={profile}
                    setProfile={setProfile}
                    selectedTests={selectedTests}
                    selectedAddress={selectedAddress}
                    setSelectedTests={setSelectedTests}
                    fullScreen={fullScreen}
                    setFullScreen={setFullScreen}

                    // cities={cities}
                    // education={education}
                    // experience={experience}
                    // category={category}
                    // salary={salary}
                    />
                {/* <div className="col-span-1 p-8">
                    <Image src={addBanner} width={500} height={150} alt='' />
                </div>
            </div>
        </div> */}
                    </Col>
    )
}

export default Page;