import { Home } from "../pages/Home";
import Footers from "../components/UI/Footers";  // ✅ correct
import Headers from "../components/UI/Headers";  // ✅ correct


export const AppLayout = () => {
    return(
    <>
    <Headers />
    <Home />
    <Footers />
    </>
    );
};