import Footers from "../components/UI/Footers";
import Headers from "../components/UI/Headers";
import { Outlet } from "react-router-dom"; // ✅ important
import '../App.css';

export const AppLayout = () => {
    return (
        <>
            <Headers />
            <Outlet />  {/* ✅ This is where route-specific pages like Contact, About will show */}
            <Footers />
        </>
    );
};
