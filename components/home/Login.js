import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";

const Login = () => {
    return (
        <div className="z-50 antialiased bg-red-500 font-poppins [perspective: 600px] w-96 md:w-[30rem]">
            {/* <!-- Content --> */}
            <div className="w-full pt-[4rem]">
                <div className="container py-8 mx-auto">
                    <div className="w-full mx-auto rounded shadow bg-zinc-100">
                        <div className="w-full px-8 py-4 text-xl text-center text-black border-b border-grey-lighter">Welcome To TaskMaster!</div>
                        <div className="px-8 py-4">
                            <div className="flex flex-col mb-4 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                                <div className="w-full">
                                    <TextField
                                        label="Email"
                                        id="name"
                                        name="name"
                                        size="large"
                                        variant="outlined"
                                        placeholder="Enter Name"
                                        fullWidth
                                        type="text"
                                        autoComplete="on"
                                    />
                                </div>
                            </div>
                            <div className="w-full mb-4">
                                <TextField
                                    label="Password"
                                    id="password"
                                    name="password"
                                    size="large"
                                    variant="outlined"
                                    placeholder="Enter Password"
                                    fullWidth
                                    type="password"
                                    autoComplete="on"
                                />
                            </div>
                            <div className="grid text-center place-items-center">
                                <button className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white transition duration-300 bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-roboto" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Login
                                </button>
                            </div>
                        </div>
                        <p className="p-4 my-4 text-center">
                            <button className="text-sm no-underline transition duration-200 text-grey-dark hover:text-grey-darker hover:text-indigo-600">Register for an Account</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
