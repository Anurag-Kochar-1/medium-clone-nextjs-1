import HomeTopBar from "../components/Mobile/TopBar/HomeTopBar";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

interface HomeLayoutProps {
    children: React.ReactNode
}


export const Layout = ({children}:HomeLayoutProps) => {
    return (
        <div className="grid grid-cols-12">
            <HomeTopBar />
            <Navbar />
            {children}
            <Sidebar />
        </div>
    )
}