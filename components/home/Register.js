import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";

const Register = ({ flip, setFlipped }) => {


    return (
        <div className="container mx-auto py-8 absolute [-webkit-backface-visibility:hidden] [backface-visibility:hidden] w-full rounded bg-zinc-100">
            <div className="w-full px-8 py-4 text-xl text-center text-black border-b border-grey-lighter">Register for a free account</div>
            <div className="px-8 py-4">
                <div className="flex flex-col mb-4 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                    <div className="w-full">
                        <TextField
                            label="Register Name"
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
                    <div className="w-full">
                        <TextField
                            label="Register Email"
                            id="email"
                            name="email"
                            size="large"
                            variant="outlined"
                            placeholder="Enter Email"
                            fullWidth
                            type="email"
                            autoComplete="on"
                        />
                    </div>
                </div>
                <div className="w-full mb-4">
                    <TextField
                        label="Register Password"
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
                <div className="w-full mb-4">
                    <TextField
                        label="Confirm Password"
                        id="confirm_password"
                        name="password"
                        size="large"
                        variant="outlined"
                        placeholder="Confirm Password"
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
                            Sign Up
                    </button>
                </div>
            </div>
            <p className="p-4 my-4 text-center">
                <button className="text-sm no-underline transition duration-200 text-grey-dark text-slate-800 hover:text-indigo-600"
                    onClick={() => setFlipped(!flip)}>
                    I already have an account
                </button>
            </p>
        </div>
    );
};

export default Register;
