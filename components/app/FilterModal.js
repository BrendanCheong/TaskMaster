import Modal from "@mui/material/Modal";
import FilterTaskForm from "@/app/FilterTaskForm";

const FilterModal = ({ open, handleModalState }) => {
    return (
        <>
            <Modal
                aria-labelledby="filter-tasks-modal"
                aria-describedby="filter-modal-description"
                open={open}
                onClose={handleModalState}
            >
                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                    <div className="relative flex w-11/12 bg-white rounded-lg h-11/12 md:w-1/2 md:h-1/2">
                        <div className="flex flex-col items-start w-full">
                            <div className="flex items-center w-full text-center p-7">
                                <h1 className="text-lg font-bold text-gray-900 font-poppins">Filter Tasks</h1>
                                <svg onClick={() => handleModalState()} className="w-8 h-8 ml-auto transition duration-300 rounded-full cursor-pointer text-cool-gray-800 hover:text-purple-600 focus:text-purple-600 hover:bg-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                                </svg>
                            </div>

                            <div className="w-full h-full px-7" id="Filter Tasks">
                                <FilterTaskForm/>
                            </div>
                            <div className="flex items-center justify-end w-full p-7">
                                <button type="button" className="px-4 py-2 font-semibold text-teal-700 duration-300 bg-transparent border border-teal-500 shadow-md rounded-xl hover:bg-indigo-500 hover:text-white hover:border-transparent focus:outline-none"
                                    onClick={() => handleModalState()}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default FilterModal;
