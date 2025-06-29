import Footers from "../UI/Footers";
import Headers from "../UI/Headers";
import { Outlet } from "react-router-dom"; // ✅ important

export const AppLayout = () => {
    return (
        <>
            <Headers />
            <Outlet />  {/* ✅ This is where route-specific pages like Contact, About will show */}
            <Footers />
        </>
    );
};
