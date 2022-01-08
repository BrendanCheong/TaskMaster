const SideBarButton = ({ buttonName, buttonFunction, iconPresent }) => {
    return (
        <>
            <button className="flex flex-row px-5 py-2 space-x-10 text-white transition duration-300 bg-teal-500 shadow-xl hover:bg-teal-700 rounded-xl focus:outline-none focus:ring-4 focus-within:ring-white active:ring-4 active:ring-white"
                onClick={() => buttonFunction()}>
                { iconPresent 
                    ? 
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-[0.05rem] mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                        </svg>
                    </>
                    : <></>}
                {buttonName}
            </button>
        </>
    );
};

export default SideBarButton;
