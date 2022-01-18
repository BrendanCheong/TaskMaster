import TextField from "@mui/material/TextField";
import * as yup from "yup";
import Router from "next/router";
import { useState } from "react";
import { useFormik } from "formik";
import { VARIANT } from "@/util/popupTypes";
import { useSnackbar } from "notistack";
import cookie from "js-cookie";
import axios from "axios";
import UserAPI from "@/api/userAPI";

const Login = ({ flip, setFlipped }) => {

    const [loading, setLoading] = useState(false);
    const ONE_HOUR_DURATION = 1 / 24;

    const validationSchema = yup.object({
        email: yup.string().required("You must enter your email"),
        password: yup.string()
            .required("You must enter a password")
            .min(8, "Your Password must be at least 8 characters"),
    });
    

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            setLoading(true);
            const api = new UserAPI();
            const response = await api.userAuth("/login", values);
            cookie.set("token", response.data.success || "error", {
                expires: ONE_HOUR_DURATION,
                secure: true,
                sameSite: "none",
                domain: process.env.NEXT_PUBLIC_API_URL,
            });
            setLoading(false);
            if (response) {
                Router.push("/todo");
                handlePopup("Successfully Logged In!", VARIANT.SUCCESS);
                return;
            }
            // eslint-disable-next-line consistent-return
            else return handlePopup("Error! Wrong Credientials", VARIANT.ERROR);
        },
        validationSchema: validationSchema,
    });
    

    const { enqueueSnackbar } = useSnackbar();

    const handlePopup = (message, variant) => {
        enqueueSnackbar(message, {
            variant: variant,
        });
    };

    const cookie_test = async () => {
        cookie.set("token", "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSIsInBhc3N3b3JkIjpudWxsLCJuYW1lIjoiSm9obiIsImV4cCI6MTY0MjUxNjQzOX0.QbgsHdDEMOi85MiWzS8OSvY8lT_Vd05s5dH7112XIz4", {
            expires: 1/24,
            secure: true,
            sameSite: "none",
        });
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/users/cookie", {
            
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
        });
        console.log(response);
    };

    return (
        <>
            <form className="container py-8 mx-auto absolute [-webkit-backface-visibility:hidden] [backface-visibility:hidden] w-full rounded bg-zinc-100"
                onSubmit={formik.handleSubmit}
                autoComplete="on">
                <div className="border-grey-lighter w-full px-8 py-4 text-xl text-center text-black border-b">Welcome To TaskMaster!</div>
                <div className="px-8 py-4">
                    <div className="md:flex-row md:space-x-5 md:space-y-0 flex flex-col mb-4 space-y-5">
                        <div className="w-full">
                            <TextField
                                label={flip ? "" : "Email"}
                                id="email"
                                name="email"
                                size="large"
                                variant="outlined"
                                placeholder={"Enter Name"}
                                fullWidth
                                type="email"
                                autoComplete="on"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                onBlur={formik.handleBlur}
                                disabled={flip}
                            />
                        </div>
                    </div>
                    <div className="w-full mb-4">
                        <TextField
                            label={ flip ? "" : "Password"}
                            id="password"
                            name="password"
                            size="large"
                            variant="outlined"
                            placeholder="Enter Password"
                            fullWidth
                            type="password"
                            autoComplete="on"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            onBlur={formik.handleBlur}
                            disabled={flip}
                        />
                    </div>
                    <div className="place-items-center grid text-center">
                        {
                            loading
                                ? <>
                                    <button type="button" className="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md">
                                        <svg className="animate-spin w-5 h-5 mr-3 -ml-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    Loading...
                                    </button>
                                </>
                                : <>
                                    <button className="hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-roboto inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white transition duration-300 bg-indigo-600 border border-transparent rounded-md shadow-sm" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    Login
                                    </button>
                                </>
                        }
                    </div>
                </div>
                <p className="flexrow p-4 my-4 space-x-3 text-center">
                    <button className="text-grey-dark text-slate-800 hover:text-indigo-600 text-sm no-underline transition duration-200"
                        onClick={() => setFlipped(!flip)} 
                        type="button"
                        disabled={flip}>
                    Register for an Account</button>
                    <button className="text-grey-dark text-slate-800 hover:text-indigo-600 text-sm no-underline transition duration-200"
                        onClick={() => cookie_test()} 
                        type="button"
                        disabled={flip}>
                    Testing Button</button>
                </p>
            </form>
        </>
    );
};

export default Login;
