import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import "./simpleLayout.css";
const SimpleLayout = () => {
    return (
        <div className="simple-layout-container">
            <NavBar />
            <main className="simple-layout-main-container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default SimpleLayout