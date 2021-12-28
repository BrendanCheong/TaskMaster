import { useState, createContext } from "react";

export const SideBarContext = createContext(null);

const Layout = ({ children }) => {

    const [isSideBarActive, setIsSideBarActive] = useState(true);
    
    /**
     * returns {void} toggles the side bar state
     */
    function toggleSideBar() {
        setIsSideBarActive(!isSideBarActive);
        //console.log(isSideBarActive);
    }

    const sideBarData = { toggleSideBar, isSideBarActive };
    
    return (
        <div className="relative w-full min-h-screen transition duration-500 ease-in-out bg-white md:flex">
            <SideBarContext.Provider value={sideBarData}>
                {children}
            </SideBarContext.Provider>
        </div>
    );
};

export default Layout;
