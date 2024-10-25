import { Href, ImagePath, Logout, Widgets } from "@/Constant";
// import { UserProfileData } from "@/Data/Layout";
import { useAppSelector } from "@/Redux/Hooks";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FileText, LogOut, Settings, Users } from "react-feather";
import LoginModal from "@/Redux/loginDo";
import './profileStyle.css'

export const Profile = ({isOpen , setIsOpen} : any) => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // console.log("check if this is working fine");
  
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const [userId , setUserId] = useState<any>(null)
  const [userData , setUserData] = useState<any>(null)
  const router = useRouter();
  const pathname = usePathname(); // Hook to detect route changes

  const LogOutUser = () => {
    // Cookies.remove("mofi_token");
    router.push("/home");
    sessionStorage.removeItem('user_id')
    sessionStorage.removeItem('user_data')
  };
  const [UserProfileData , setUserProfileData]  = useState<any>([])

  useEffect(() => {
    // Function to check if user is logged in
    const checkLoginStatus = () => {
      const userId = sessionStorage.getItem("user_id");
      const userData = sessionStorage.getItem("user_data");
      if (userId) {
        setUserId(userId)
        if(userData){
          console.log("the json data",userData);
          
          const userDataList = JSON.parse(userData)
          setUserData(userDataList)
        }
        const UserProfileData = [
          // {
          //   icon: <Users />,
          //   title: "Account",
          //   link:"chat/private_chat",
          // },
          // {
            //   icon: <Mail />,
            //   title: "Inbox",
            //   link:"app/letter_box",
            // },
            // {
            //   icon: <FileText />,
            //   title: "Taskboard",
            //   link:"app/task",
            // },
            // {
            //   icon: <Settings />,
            //   title: "Settings",
            //   link:"users/edit_profile",
            // },
            {
              icon: <FileText />,
              title: "Book a Home Visit",
              link:"home",
            },
            {
              icon: <FileText />,
              title: "Find Tests",
              link:"",
            },
            {
              icon: <FileText />,
              title: "My Profile",
              link:"labs/profile",
            },
            {
              icon: <FileText />,
              title: "My Contact",
              link:"labs/patient_information",
            },
            {
              icon: <FileText />,
              title: "My Booking",
              link:"labs/booking_information",
            },
            {
              icon: <FileText />,
              title: "Switch Accounts",
              link:"",
            },
            {
              icon: <LogOut />,
              title: "Sign Out",
              link:"",
              onClick(evt : any) { 
                evt.preventDefault();
                router.push("/home");
  // sessionStorage.removeItem('user_id')
  // sessionStorage.removeItem('user_data')
  sessionStorage.clear();
  const event = new Event('sessionUpdate');
  window.dispatchEvent(event);
  setUserId(null)
  setUserData(null)
                // toggleModal()
                // setModalToggle();
             }
            },
          ];
          setUserProfileData(UserProfileData)
        }
        else {
          const UserProfileData = [
            // {
            //   icon: <Users />,
            //   title: "Account",
            //   link:"chat/private_chat",
            // },
            // {
              //   icon: <Mail />,
              //   title: "Inbox",
              //   link:"app/letter_box",
              // },
              {
                icon: <FileText />,
                title: "Book a Home Visit",
                link:"home",
              },
              {
                icon: <FileText />,
                title: "Find Tests",
                link:"",
              },
              {
                icon: <Settings />,
                title: "Solution Integration for Labs",
                link:"",
              },
              {
                icon: <LogOut />,
                title: "Sign In",
                link:"labs/login",
                onClick(evt : any) { 
                  evt.preventDefault();
                  toggleModal()
                  // setModalToggle();
               }
              },
              // {
              //   icon: <FileText />,
              //   title: "My Contact",
              //   link:"labs/patient_information",
              // },
              // {
              //   icon: <FileText />,
              //   title: "My Booking",
              //   link:"labs/booking_information",
              // },
            ];
            setUserProfileData(UserProfileData)
    
        }
      // setIsLoggedIn(!!userId);
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

  // const router = useRouter();
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setIsOpen]);

  // Close dropdown on pathname (route) change
  useEffect(() => {
    setIsOpen(false); // Close dropdown when the route (pathname) changes
  }, [pathname]);




  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
      
  return (
    <div >
      <LoginModal showModal={showModal} toggleModal={toggleModal} routePage={'home'}/>
      <div className="header-content d-flex align-items-center" onClick={toggleDropdown}>
        <i
          className={`fa ${isOpen ? 'fa-times' : 'fa-align-right'}`}
          style={{ marginRight: '8px', padding: '4px 6px', cursor: 'pointer', fontSize : '18px' }}
          
        ></i>
      </div>
      {isOpen && (
        <ul ref={dropdownRef}  className="profile-dropdown" style={{width : 'auto' , top : '75px' , left : '0'}}>
        {userId !== null && 
        <Link href={'/labs/profile'}>

        <div className="" style={{borderBottomStyle : 'groove' , borderBottomColor : 'black' , padding : '20px 20px 20px 12px', display : 'flex' , gap : '2rem'}}>
<img style={{height:'3rem', margin:'0 ' , borderRadius : '20px'}} className="img-fluid table-avtar" src={`${ImagePath}/Father.png`} alt="user image" />

          <div style={{display : 'grid'}}>

          <p style={{color : 'black' , fontSize : '20px', fontWeight : 600 , marginBottom : '8px'}}>{userData.name ? userData.name : 'NA'}</p>
          <p className="mb-0" style={{color : 'black' , fontSize : '12px'}}>
            <strong>USER ID</strong>: LBNUSR-1-IND{userData.id}
            {/* <i className="fa fa-angle-down"></i> */}
          </p>
          </div>
        </div>
        </Link>
}
          {UserProfileData.map((item : any, index : any) => (
            <li key={index} style={{borderBottomStyle : 'groove' , display : 'block'}}>
              <Link href={`/${item.link}`} onClick={item.onClick}>
                {/* {item.icon} */}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          {/* <li onClick={LogOutUser}>
            <Link href={Href} scroll={false}>
              <LogOut />
              <span>{Logout}</span>
            </Link>
          </li> */}
        </ul>
      )}
      <style jsx>{`
        .header-bar {
          width: 100%;
          background-color: #fff;
          padding: 10px 20px;
          position: fixed;
          top: 0;
          left: 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        .header-content {
          display: flex;
          align-items: center;
        }
        .profile-dropdown {
          position: fixed; /* Change to fixed to ensure full-width alignment */
          top: 60px; /* Adjust based on your header height */
          left: 0;
          right: 0; /* Ensure it spans the full width */
          background-color: #fff;
          border: 1px solid #ddd;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          list-style: none;
          padding: 10px;
          margin: 0;
          border-radius: 4px;
          z-index: 1000; /* Ensure it is above other content */
        }
        .profile-dropdown li {
          padding: 8px 12px;
        }
        .profile-dropdown li a {
          text-decoration: none;
          color: #333;
          display: flex;
          align-items: center;
        }
        .profile-dropdown li a span {
          margin-left: 8px;
        }
          
      `}</style>
    </div>
  );

  // return (
  //   <li className="profile-nav onhover-dropdown px-0 py-0">
  //     <div className="d-flex profile-media align-items-center">
  //       {/* <img className="img-30" src={`${ImagePath}/dashboard/profile.png`} alt="" /> */}
  //       <i className="fa fa-align-right" style={{marginRight : '8px' , padding : '4px 6px'}}></i>
  //       <div className="flex-grow-1">
  //         {/* <span>Alen Miller</span>
  //         <p className="mb-0 font-outfit">
  //           UI Designer<i className="fa fa-angle-down"></i>
  //         </p> */}
  //       </div>
  //     </div>
  //     <ul className="profile-dropdown onhover-show-div">
  //       {UserProfileData.map((item : any, index:any) => (
  //         <li key={index}>
  //           <Link href={`/${item.link}`}>{item.icon}<span>{item.title} </span></Link>
  //         </li>
  //       ))}
  //       {/* <li onClick={LogOutUser}><Link href={Href}scroll={false} ><LogOut /><span>{Logout} </span></Link></li> */}
  //     </ul>
  //   </li>
  // );
};

