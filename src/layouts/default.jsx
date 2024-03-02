import "./default.css";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

const DefaultLayout = ({}) => {
  return (
    <section className="layout-main">
      <Outlet />
      <Navbar />
    </section>
  );
};

export default DefaultLayout;
