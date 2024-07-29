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

interface FormValue {
    name: string;
    email: string | boolean;
    gender: string;
    dob: Date | null | string | number;
    city: string;
    mobile: string;
    pincode: string;
    location: string;
    address: string;
    age: string | number;
    timeslot: string | number;
    date: string;
    relation: string;
    tests: string | number;
    workInCities: [] ;
    oneDayJob: string;
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

const Page = () => {
    
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
    
    // const menuItems = userType === 'experience' ? StepsExperience : StepsFresher;
    const [profile, setProfile] = useState<FormValue>({
        name: '',
        email: '',
        gender: '',
        dob: '',
        city: '',
        mobile: '',
        pincode: '',
        location: '',
        address: '',
        age: 0,
        timeslot: '',
        date: '',
        relation: '',
        tests: '',
        workInCities: [],
        oneDayJob: '',
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
        // citiesAPI().then((cities: string[]) => {
        //     const uniqueCities = cities.filter((value, index, self) => self.indexOf(value) === index);
        //     setCities(uniqueCities);
        // });
        // educationAPI().then((education) => setEducation(education))
        // experienceAPI().then((experience) => setExperience(experience))
        // salaryAPI().then((salary) => setSalary(salary))
        // positionAPI().then((position)=>{ setCategory(position.result) }) 
    }, [])

    return (
        <Col md='6' >
      <div style={{padding : '0', height:'15rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
<Steppers stepActive={stepActive} setStepActive={setStepActive} />
<h1 className="text-white" style={{padding:'24px', margin: '0'}}>Home Visit Booking</h1>
{/* <div>
  <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>Glucose</p>
  <h2 className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>1100.00</h2>
</div> */}
<div style={{ display: 'flex', alignItems: 'center' , paddingBottom : '24px'}}>
  <div style={{ flex: 1, display: 'flex', justifyContent: '' }}>
    
      <div>
  <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>Glucose</p>
  <h2 className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>1100.00</h2>
</div>
  </div>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' ,paddingRight : '24px'}}>
      <div>
                  {stepActive == 3 && 
                    <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Add To Cart</Button>
}
                    {profile.date && (

                        <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>Date : {profile.date}</p>
                    )}
                    {profile.timeslot && (
  <p className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>Time : {profile.timeslot}</p>
)}
</div>

  </div>
</div>
<div style={{marginTop : '24px', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
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