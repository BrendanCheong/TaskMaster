import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { SideBarContext } from "./Layout";
import { resetTaskState } from "@/redux/taskViewSlice";
import SideBarButton from "@/global/SideBarButton";
import Logo from "@/global/Logo";
import TaskContainer from "@/app/TaskContainer";
import FilterModal from "@/app/FilterModal";

const Sidebar = () => {

    const sideBarData = useContext(SideBarContext);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleModalState = () => {
        setOpen(!open);
    };

    const addTask = () => {
        dispatch(resetTaskState({
            showState: "ADD",
        }));
    };

    
    return (
        <div className={"absolute inset-y-0 left-0 px-4 space-y-6 text-white transition duration-300 ease-in-out transform bg-indigo-500 md:w-96 w-72 py-7 md:relative md:translate-x-0 z-40 rounded-b-2xl shadow-md" + 
            (sideBarData.isSideBarActive 
                ? " -translate-x-full" 
                : ""
            )}>
            <Logo/>
            <div className="flex flex-row space-x-2 font-roboto">
                <SideBarButton buttonName={"Add Task"} buttonFunction={addTask} iconPresent={false}/>
                <SideBarButton buttonName={"Filter"} buttonFunction={handleModalState} iconPresent={true}/>
            </div>
            <FilterModal open={open} handleModalState={handleModalState}/>
            <TaskContainer/>
        </div>
    );
};

export default Sidebar;
