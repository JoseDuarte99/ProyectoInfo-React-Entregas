import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";


const WithNavbarLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default WithNavbarLayout;
