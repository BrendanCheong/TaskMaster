import { useContext } from "react";
import { SideBarContext } from "./Layout";

import Logo from "@/global/Logo";
import Nav from "@/global/Nav";

const Sidebar = () => {

    const sideBarData = useContext(SideBarContext);
    
    return (
        <div className={"absolute inset-y-0 left-0 px-4 space-y-6 text-white transition duration-300 ease-in-out transform bg-indigo-500 md:w-96 w-64 py-7 md:relative md:translate-x-0 z-50" + 
            (sideBarData.isSideBarActive 
                ? " -translate-x-full" 
                : ""
            )}>
            <Logo/>
            <Nav/>
        </div>
    );
};

export default Sidebar;
