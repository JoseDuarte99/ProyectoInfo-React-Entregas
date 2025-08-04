import { Outlet } from "react-router";
import { Navbar } from "../pages/Navbar";


const WithNavbarLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default WithNavbarLayout;
