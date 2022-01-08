import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

const UserAccountModal = () => {
    return (
        <div>
            <form className="space-y-2 overflow-hidden bg-transparent font-poppins">
                <div className="flex flex-col px-4 py-2 space-y-8 md:flex-row md:space-x-5 md:space-y-0 md:px-6">
                    <div className="w-full">
                        <TextField
                            label="Change Name"
                            id="title"
                            size="large"
                            variant="outlined"
                            placeholder="Name to Change"
                            fullWidth
                        />
                    </div>
                    <div className="w-full">
                        <TextField
                            label="Change Email"
                            id="title"
                            size="large"
                            variant="outlined"
                            placeholder="Email to Change"
                            fullWidth
                            type="email"
                        />
                    </div>
                </div>
                <div className="px-4 py-2 md:grid md:grid-cols-1 md:items-start md:pt-5 md:px-6 font-roboto">
                    <div className="mt-1 md:mt-0 md:col-span-3">
                        <TextField
                            label="Change Password"
                            id="title"
                            size="large"
                            variant="outlined"
                            placeholder="Password to Change"
                            height={10}
                            fullWidth
                            type="password"
                        />
                    </div>
                </div>
                <div className="px-4 py-2 md:grid md:grid-cols-1 md:items-start md:pt-5 md:px-6 font-roboto">
                    <div className="mt-1 md:mt-0 md:col-span-3">
                        <TextField
                            label="Confirm Password"
                            id="title"
                            size="large"
                            variant="outlined"
                            placeholder="Confirm Password"
                            height={10}
                            fullWidth
                            type="password"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 px-4 pt-2 pb-4 md:px-6">
                    <div className="flex justify-end">
                        <div className="grid flex-grow grid-cols-1 md:flex-grow-0">
                            <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white transition duration-300 bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                    Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserAccountModal;
