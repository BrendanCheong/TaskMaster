import { useContext } from "react";
import { SideBarContext } from "./Layout";

const Logo = () => {

    const sideBarData = useContext(SideBarContext);
    
    return (
        <div className="flex justify-center">
            <button className="absolute top-5 left-5 focus:outline-none md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition duration-300 hover:fill-red-400" viewBox="0 0 20 20" fill="currentColor" onClick={() => sideBarData.toggleSideBar()} id="cross">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </button>
            <div className="flex flex-row items-center space-x-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="invisible w-7 h-7 md:visible" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="notepad">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <h1 className="block w-full h-full text-2xl font-extrabold break-all select-none font-poppins">
                    TaskMaster
                </h1>
            </div>
        </div>
    );
};

export default Logo;
