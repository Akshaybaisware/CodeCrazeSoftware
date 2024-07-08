
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/RootLayout/Rootlayout";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurExpertise from "./Components/AboutUs/OurExpertise";
import EcommerceSoluion from "./Components/Products/EcommerceSoluion";
import CRM from "./Components/Products/CRM";
import CMS from "./Components/Products/CMS";
import ERP from "./Components/Products/ERP";
import RestaurantManagement from "./Components/Products/RestaurantManagement";
import SuperMarket from "./Components/Products/SuperMarket";
import CentermanagementSoftware from "./Components/Products/CentermanagementSoftware";
import Career from "./Components/Career/Career";
import Blog from "./Components/Blog/Blog";
import ContactUs from "./Components/ContactUs/ContactUs";
import MobileApp from "./Components/Services/MobileApp";
import CustomApp from "./Components/Services/CustomApp";
import Website from "./Components/Services/Website";
import SoftwareTesting from "./Components/Services/SoftwareTesting";
import UiUx from "./Components/Services/UiUx";
import WhyCodeCraze from "./Components/AboutUs/WhyCodeCraze";
import OnlineTest from "./Components/OnlineTest/OnlineTest";
import JobDescription from "./Components/JobDescription/JobDescription";
import CarrerApply from "./Components/CarrerApply/CarrerApply";
import Readmoremobileapp from "./Components/ReadMore/Readmoremobileapp"
import Readmoresoftwaretesting from "./Components/ReadMore/Readmoresoftwaretesting"
import Ecommerce from "./Components/ReadMore/Ecommerce"
import Angular from "./Components/ReadMore/Angular"
import Readmoresalesforce from './Components/ReadMore/Readmoresalesforce'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="ourexpertise" element={<OurExpertise />} />
      <Route path="whycodecraze" element={<WhyCodeCraze />} />
      <Route path="e-commerce" element={<EcommerceSoluion />} />
      <Route path="crm" element={<CRM />} />
      <Route path="cms" element={<CMS />} />
      <Route path="erp" element={<ERP />} />
      <Route path="onlinetest" element={<OnlineTest />} />
      <Route path="restaurant-management" element={<RestaurantManagement />} />
      <Route path="super-market-software" element={<SuperMarket />} />
      <Route
        path="center-management-software"
        element={<CentermanagementSoftware />}
      />
      <Route path="career" element={<Career />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="mobile-application-development" element={<MobileApp />} />
      <Route path="custom-application-development" element={<CustomApp />} />
      <Route path="website-programming-development" element={<Website />} />
      <Route path="software-testing" element={<SoftwareTesting />} />
      <Route path="ui-ux" element={<UiUx />} />
    <Route path ="jobdescription" element={<JobDescription/>} />
    <Route path ="/carrerapply" element={<CarrerApply/>} />
    <Route path ="/readmoremobileapp" element={<Readmoremobileapp/>}/>
    <Route path ="/readmoresoftwaretesting" element={< Readmoresoftwaretesting />}/>
    <Route path="/readmoreecommerce"  element={< Ecommerce/>} />
    <Route path="/readmoreangular"  element={< Angular/>} />
    <Route path="/readmoresalesforce" element={<Readmoresalesforce/>}/>
    </Route>
  )
);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
