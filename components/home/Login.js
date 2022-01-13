import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import { VARIANT } from "@/global/Snackbar";
import { useSnackbar } from "notistack";
import UserAPI from "@/api/userAPI";

const Login = ({ flip, setFlipped }) => {

    // TODO: Handle error handling when user enters wrong user details from API

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
            const api = new UserAPI();
            const response = await api.userAuth("/login", values);
            if (response) return handlePopup("Successfully Logged In!", VARIANT.SUCCESS);
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

    return (
        <>
            <form className="container py-8 mx-auto absolute [-webkit-backface-visibility:hidden] [backface-visibility:hidden] w-full rounded bg-zinc-100"
                onSubmit={formik.handleSubmit}
                autoComplete="on">
                <div className="w-full px-8 py-4 text-xl text-center text-black border-b border-grey-lighter">Welcome To TaskMaster!</div>
                <div className="px-8 py-4">
                    <div className="flex flex-col mb-4 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
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
                    <button className="text-sm no-underline transition duration-200 text-grey-dark text-slate-800 hover:text-indigo-600"
                        onClick={() => setFlipped(!flip)} type="button">
                    Register for an Account</button>
                </p>
                <button type="button" onClick={() => handlePopup("hello world", VARIANT.INFO)}>test</button>
            </form>
        </>
    );
};

export default Login;
