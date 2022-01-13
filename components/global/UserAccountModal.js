import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFormik } from "formik";
import { refreshToken } from "@/util/refreshToken";
import { VARIANT } from "@/util/popupTypes";
import { useSnackbar } from "notistack";
import UserAPI from "@/api/userAPI";
import * as yup from "yup";

const UserAccountModal = () => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const validationSchema = yup.object({
        name: yup.string(),
        email: yup.string().email(),
        password: yup.string()
            .required("You must enter a password")
            .min(8, "Your Password must be at least 8 characters"),
        confirm_password: yup.string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
    });

    const formik = useFormik({
        initialValues: {
            name: "", // not required
            email: "", // not req
            password: "", // enforce password min length restraint to be > 8 characters, required
            confirm_password: "", // basically confirm password, required
        },
        onSubmit: (values) => {
            let filtered = Object.keys(values) // filters out values with empty strings
                .filter((k) => values[k] != "")
                .reduce((a, k) => ({ ...a, [k]: values[k] }), {});
            handleSubmit(filtered);
        },
        validationSchema: validationSchema,
    });

    const handleSubmit = async (payload) => { 
        try {
            setLoading(true);
            const bool = await refreshToken("");
            if (bool) {
                const api = new UserAPI();
                const response = await api.userUpdateData("/1000", payload);
                if (response) handlePopup("Updated User Details Successfully", VARIANT.SUCCESS);
            } else if (!bool || "error" in data) {
                handlePopup("Token Expired! Please Log In Again", VARIANT.WARNING);
                router.push("/");
            }
            setLoading(false);
        } catch(e) {
            // eslint-disable-next-line no-console
            console.error(e);
            handlePopup("Authentication Server Error", VARIANT.ERROR);
            setLoading(false);
        }
    };

    const { enqueueSnackbar } = useSnackbar();

    const handlePopup = (message, variant) => {
        enqueueSnackbar(message, {
            variant: variant,
        });
    };

    return (
        <div>
            <form className="space-y-2 overflow-hidden bg-transparent font-poppins" id="User Details Forms" onSubmit={formik.handleSubmit} autoComplete="on">
                <div className="flex flex-col px-4 py-2 space-y-8 md:flex-row md:space-x-5 md:space-y-0 md:px-6">
                    <div className="w-full">
                        <TextField
                            label="Change Name"
                            id="name"
                            name="name"
                            size="large"
                            variant="outlined"
                            placeholder="Name to Change"
                            fullWidth
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={"Optional Field"}
                            onBlur={formik.handleBlur}
                            autoComplete="on"
                        />
                    </div>
                    <div className="w-full">
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            placeholder="Email to Change"
                            type="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={Boolean(formik.errors.email) && formik.errors.email || "Optional Field"}
                            onBlur={formik.handleBlur}
                            autoComplete="on"
                        />
                    </div>
                </div>
                <div className="px-4 py-2 md:grid md:grid-cols-1 md:items-start md:pt-5 md:px-6 font-roboto">
                    <div className="mt-1 md:mt-0 md:col-span-3">
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            placeholder="Password to Change"
                            type="password"
                            label="New Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            onBlur={formik.handleBlur}
                            autoComplete="on"
                        />
                    </div>
                </div>
                <div className="px-4 py-2 md:grid md:grid-cols-1 md:items-start md:pt-5 md:px-6 font-roboto">
                    <div className="mt-1 md:mt-0 md:col-span-3">
                        <TextField
                            fullWidth
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            type="password"
                            label="Confirm Password"
                            value={formik.values.confirm_password}
                            onChange={formik.handleChange}
                            onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                            error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                            helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                            onBlur={formik.handleBlur}
                            autoComplete="on"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 px-4 pt-2 pb-4 md:px-6">
                    <div className="flex justify-end">
                        <div className="flex flex-row flex-grow space-x-3 md:flex-grow-0">
                            {
                                loading
                                    ? <>
                                        <button type="button" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                            <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                    Loading...
                                        </button>
                                    </>
                                    : <>
                                        <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white transition duration-300 bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                    Confirm
                                        </button>
                                    </>
                            }
                            <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white transition duration-300 bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button" onClick={() => router.push("/")}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserAccountModal;
