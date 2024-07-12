// pages/client-page.js
"use client";
import { useState } from 'react';
import FloatingForm from './FloatingForm';
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {  ImagePath } from "@/Constant";

// export default function ClientPage() {
    const ProfileData = () => {
        const [count, setCount] = useState(0);

  return (
    <div>
      
    
    {/* <div> */}
      {/* <div style={{height:'3rem', width:'100%',backgroundColor:'black'}}>

</div> */}
      <FloatingForm />
      {/* <h1>Client Side HTML Page</h1>
      <p>Click the button to increase the count:</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button> */}
    {/* </div> */}
      </div>
  );
}

export default ProfileData;

