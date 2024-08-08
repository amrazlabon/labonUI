import { Href, ImagePath, Logout } from "@/Constant";
// import { UserProfileData } from "@/Data/Layout";
import { useAppSelector } from "@/Redux/Hooks";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FileText, LogOut, Settings, Users } from "react-feather";

export const Profile = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const LogOutUser = () => {
    Cookies.remove("mofi_token");
    router.push("/acheck/profile");
  };
  const [UserProfileData , setUserProfileData]  = useState<any>([])


  useEffect(() => {
    const userId = sessionStorage.getItem("user_id");
    if (userId) {
      const UserProfileData = [
        {
          icon: <Users />,
          title: "Account",
          link:"chat/private_chat",
        },
        // {
          //   icon: <Mail />,
          //   title: "Inbox",
          //   link:"app/letter_box",
          // },
          {
            icon: <FileText />,
            title: "Taskboard",
            link:"app/task",
          },
          {
            icon: <Settings />,
            title: "Settings",
            link:"users/edit_profile",
          },
          {
            icon: <FileText />,
            title: "My Contact",
            link:"acheck/patient_information",
          },
          {
            icon: <FileText />,
            title: "My Booking",
            link:"acheck/booking_information",
          },
          {
            icon: <LogOut />,
            title: "Log Out",
            link:"",
          },
        ];
        setUserProfileData(UserProfileData)
      }
      else {
        const UserProfileData = [
          {
            icon: <Users />,
            title: "Account",
            link:"chat/private_chat",
          },
          // {
            //   icon: <Mail />,
            //   title: "Inbox",
            //   link:"app/letter_box",
            // },
            {
              icon: <FileText />,
              title: "Taskboard",
              link:"app/task",
            },
            {
              icon: <Settings />,
              title: "Settings",
              link:"users/edit_profile",
            },
            {
              icon: <LogOut />,
              title: "Sign In",
              link:"acheck/login",
            },
            // {
            //   icon: <FileText />,
            //   title: "My Contact",
            //   link:"acheck/patient_information",
            // },
            // {
            //   icon: <FileText />,
            //   title: "My Booking",
            //   link:"acheck/booking_information",
            // },
          ];
          setUserProfileData(UserProfileData)
  
      }
    // console.log("user id",isLoggedIn)
    
    
  // if(isLoggedIn)
  }, []);

      
  return (
    <li className="profile-nav onhover-dropdown px-0 py-0">
      <div className="d-flex profile-media align-items-center">
        {/* <img className="img-30" src={`${ImagePath}/dashboard/profile.png`} alt="" /> */}
        <i className="fa fa-align-right" style={{marginRight : '8px' , padding : '4px 6px'}}></i>
        <div className="flex-grow-1">
          {/* <span>Alen Miller</span>
          <p className="mb-0 font-outfit">
            UI Designer<i className="fa fa-angle-down"></i>
          </p> */}
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {UserProfileData.map((item : any, index:any) => (
          <li key={index}>
            <Link href={`/${item.link}`}>{item.icon}<span>{item.title} </span></Link>
          </li>
        ))}
        {/* <li onClick={LogOutUser}><Link href={Href}scroll={false} ><LogOut /><span>{Logout} </span></Link></li> */}
      </ul>
    </li>
  );
};
