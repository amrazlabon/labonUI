"use client";
import Footer from "@/LayoutLabon/Footer/Footer";
import { SideBar } from "@/LayoutLabon/Sidebar/Sidebar";
import ThemeCustomizer from "@/LayoutLabon/ThemeCustomizer";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import Store from "@/Redux/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "../../../src/index.scss";
import { Header } from "@/LayoutLabon/Header/Header";
import TapTop from "@/LayoutLabon/TapTop";
import { useEffect } from "react";
import { setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import { setLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";
import '../inlineStyle.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  const compactSidebar = () => {
    let windowWidth = window.innerWidth;
    if (layout === "compact-wrapper") {
      if (windowWidth < 1200) {
        dispatch(setToggleSidebar(true));
      } else {
        dispatch(setToggleSidebar(false));
      }
    } else if (layout === "horizontal-wrapper") {
      if (windowWidth < 992) {
        dispatch(setToggleSidebar(true));
        dispatch(setLayout("compact-wrapper"));
      } else {
        dispatch(setToggleSidebar(false));
        dispatch(setLayout(localStorage.getItem("layout")));
      }
    }
  };

  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [layout]);

  return (
    // Here the breadcrumbs have been hidden
    // The main sidebar is also hidden now
    <Provider store={Store}>
      <div className={`page-wrapper ${layout}`} id="pageWrapper" >
        <Header />
        <div className="page-body-wrapper" >
          {/* <SideBar /> */}
          <div className="page-body" style={{marginTop : '80px', marginLeft : 0}}>
          <div className="mobile-restricted-content">
              {children}
            </div>
            {/* {children} */}
            </div>
          <Footer />
        </div>
      </div>
      <ThemeCustomizer />
      <ToastContainer />
      <TapTop />
    </Provider>
  );
}
