import { Col } from "reactstrap";
import { HeaderSearch } from "./HeaderSearch/HeaderSearch";
import { Notification } from "./Notification";
import { SearchBox } from "./SearchBox";
import { BookMark } from "./BookMark";
import { DarkMode } from "./DarkMode";
import { MessageBox } from "./MessageBox";
import { CartData } from "./CartData";
import { Profile } from "./Profile";
import Languages from "./Languages";
import MaximizeScreen from "./MaximizeScreen";
import { useEffect, useState } from "react";

export const HeaderRight = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to check if user is logged in
    const checkLoginStatus = () => {
      const userId = sessionStorage.getItem("user_id");
      setIsLoggedIn(!!userId);
    };

    // Check login status on component mount
    checkLoginStatus();

    // Listen for storage changes and custom session update event
    window.addEventListener("storage", checkLoginStatus);
    window.addEventListener("sessionUpdate", checkLoginStatus);

    return () => {
      // Clean up event listeners
      window.removeEventListener("storage", checkLoginStatus);
      window.removeEventListener("sessionUpdate", checkLoginStatus);
    };
  }, []);


  return (
    <Col xxl="8" xl="6" md="7" xs="8" className="nav-right pull-right right-header p-0 ms-auto">
      <ul className="nav-menus">
        {/* <HeaderSearch /> */}
        {/* <MaximizeScreen /> */}
        {/* <BookMark /> */}
        {/* <DarkMode /> */}
        {/* <MessageBox /> */}
        {!isOpen && (
          <>
            <Notification />
            <CartData />
            {isLoggedIn && <SearchBox />}
          </>
        )}
        {/* <Languages/> */}
        <Profile isOpen={isOpen} setIsOpen={setIsOpen} />
      </ul>
    </Col>
  );
};
