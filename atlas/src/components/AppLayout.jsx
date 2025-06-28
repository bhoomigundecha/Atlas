import { Home } from "../pages/Home";
import Footers from "../components/UI/Footers";  // ✅ correct
import Headers from "../components/UI/Headers";  // ✅ correct
import '../App.css';
import { About } from "../pages/About";

export const AppLayout = () => {
    return(
    <>
    <Headers />
    <Home />
    <Footers />
    </>
    );
};