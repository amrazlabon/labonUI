import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setResponsiveSearch } from "@/Redux/Reducers/LayoutSlice";

export const SearchBox = () => {
  const dispatch = useAppDispatch()
  
  return (
    <div className="d-flex profile-media align-items-center">
        <img className="img-40" style={{marginRight : '8px' , padding : '4px 6px'}} src={`${ImagePath}/dashboard/profile.png`} alt="" />
        </div>
    // <li onClick={()=>dispatch(setResponsiveSearch())}>
    //   <span className="header-search">
    //     <SVG iconId="search"/>
    //   </span>
    // </li>
  );
};
