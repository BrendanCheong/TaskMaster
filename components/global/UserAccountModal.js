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
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserAccountModal;
