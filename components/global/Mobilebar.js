import { useContext } from "react";
import { SideBarContext } from "./Layout";

const Mobilebar = () => {

    const sideBarData = useContext(SideBarContext);

    return (
        <div className="flex justify-between w-full bg-slate-800 text-neutral-100 md:hidden">
            {/** logo */}
            <h1 className="block p-4 font-bold text-white font-poppins">TaskMaster</h1>
            {/** mobile menu button */}
            <button className="p-4 transition duration-200 ease-in-out rounded-md focus:outline-none focus:bg-slate-700 hover:bg-slate-700 focus:rounded-full" onClick={() => sideBarData.toggleSideBar()}>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    );
};

export default Mobilebar;
