import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import * as yup from "yup";

const UserModal = ({ open, handleModalState }) => {
    return (
        <>
            <Modal
                aria-labelledby="user-modal"
                aria-describedby="user-details-modal-description"
                open={open}
                onClose={handleModalState}
            >
                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                    <div className="relative flex w-1/2 bg-white rounded-lg h-1/2">
                        <div className="flex flex-col items-start w-full">
                            <div className="flex items-center w-full text-center p-7">
                                <h1 className="text-lg font-bold text-gray-900 font-poppins">FUCK</h1>
                                <svg onClick={() => handleModalState()} className="w-8 h-8 ml-auto transition duration-300 rounded-full cursor-pointer text-cool-gray-800 hover:text-purple-600 focus:text-purple-600 hover:bg-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                                </svg>
                            </div>

                            <div className="w-full h-full px-7" id="overflow?">
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="transition duration-300 w-80 h-80 animate-spin" fill="none" stroke="#6366F1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                </div>
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

export default UserModal;
