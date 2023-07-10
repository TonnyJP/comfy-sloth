import {Outlet} from "react-router-dom"
import {Footer, Navbar, Sidebar} from "../components"

export const PageLayout = () => {
    return <div>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
}