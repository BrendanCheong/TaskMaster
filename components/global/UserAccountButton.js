import { useState } from "react";
import UserModal from "@/global/UserModal";

const UserAccountButton = () => {

    const [open, setOpen] = useState(false);

    const handleModalState = () => {
        setOpen(!open);
    };

    return (
        <>
            <button className="fixed px-3 py-3 text-white transition duration-300 bg-indigo-500 rounded-full shadow-xl hover:bg-indigo-800 bottom-5 right-5 focus:outline-none focus:ring-4 focus-within:ring-indigo-200 active:ring-4 active:ring-indigo-200"
                onClick={() => handleModalState()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <UserModal open={open} handleModalState={handleModalState}/>
        </>
    );
};

export default UserAccountButton;
