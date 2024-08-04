"use client";
import Store from "@/Redux/Store";
import React from "react";
import { Provider } from "react-redux";
// import './inlineStyle.css'

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className='outer-container'>
    //   <div className='container'>


      <Provider store={Store}>{children}</Provider>
  );
};

export default MainProvider;
