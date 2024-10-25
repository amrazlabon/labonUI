import { Row } from "reactstrap";
import { MobileView } from "./MobileView";
import { BreadCrumbs } from "./BreadCrumbs";
import { PageHeader } from "./PageHeader";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { headerResponsive } from "@/Redux/Reducers/LayoutSlice";
import './profileStyle.css'

export const Header = () => {
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(headerResponsive());
  }, []);

  return (
    // i can change the header style in here without any issue
    <Row className={`page-header ${toggleSidebar ? "close_icon" : ""}, my-styles`} id="page-header" style={{padding : '0' , margin : 0 , width : '100%' , boxShadow : 'none'}}>
      <MobileView />
      {/* <BreadCrumbs /> */}
      <PageHeader />
    </Row>
  );
};
