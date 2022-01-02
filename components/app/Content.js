import { useState } from "react";
import { useFormik } from "formik";
import processDate from "@/util/datetime";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import TagsInput from "./TagsInput";

const Content = () => {

    const [tagArray, setTagArray] = useState([]);

    const validationTaskSchema = yup.object({
        title: yup.string().required("Task Title is Required"),
        content: yup.string(),
        endDate: yup.date().min(
            new Date(Date.now() - 86400000),
            "End Date Cannot be in the Past!"
        ),
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
            endDate: new Date(),
        },
        onSubmit: (values) => {
            values["tagArray"] = tagArray;
            values["endDate"] = processDate(values["endDate"]);
            // eslint-disable-next-line no-console
            if (proccess.env.NEXT_PUBLIC_APP_ENV === "development") console.log(values);
        },
        validationSchema: validationTaskSchema,
    });

    return (
        <div className="flex-row flex-1 w-full h-full p-5 text-2xl bg-zinc-100">
            <form className="flex flex-row w-full h-full p-2 bg-white shadow-lg rounded-xl" id="input forms" onSubmit={formik.handleSubmit}>
                <section className="flex flex-col w-full p-3 space-y-8 md:basis-4/12">
                    <TextField
                        label="Enter Task Title"
                        id="title"
                        size="large"
                        variant="outlined"
                        height={10}
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        onBlur={formik.handleBlur}
                    />
                    <TextField
                        id="content"
                        label="Task Description"
                        multiline
                        rows={35}
                        size="small"
                        variant="outlined"
                        value={formik.values.content}
                        onChange={formik.handleChange}
                    />
                    <MobileDateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        onChange={(value) => formik.setFieldValue("endDate", value)}
                        onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                        ampm={false}
                        value={formik.values.endDate}
                        minDate={new Date()}
                        mask="___/__/__ __:__"
                        id="endDate"
                        label="Set Task Deadline"
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        onBlur={formik.handleBlur}
                        type="datetime-local"
                    />
                    <TagsInput
                        selectedTags={(tagArray) => setTagArray(tagArray)}
                        fullWidth
                        variant="outlined"
                        id="tags"
                        name="Add tags"
                        placeholder="Add Task Tags"
                        label="Tags"
                        onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                    />
                    <button className="relative w-40 h-10 px-5 py-1 mb-4 text-lg text-white transition duration-300 shadow-md rounded-xl bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-800 hover:to-violet-900 font-roboto md:hidden" type="submit">
                        Submit!
                    </button>
                </section>
                <section className="hidden sm:flex sm:flex-col sm:p-3 sm:space-y-16 sm:basis-8/12" id="preview form">
                    <div className="container absolute w-[70%] mx-auto columns-2">
                        <h1 className="w-full h-[5.8rem] p-3 text-5xl font-bold truncate font-poppins">
                            {formik.values.title}
                        </h1>
                        <div className="space-x-3">
                            <button className="relative w-40 h-10 px-5 py-1 mb-4 text-lg text-white transition duration-300 rounded-full shadow-md bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-800 hover:to-violet-900 font-roboto" type="submit">
                                Submit!
                            </button>
                            <span className="relative w-40 h-10 px-5 py-2 mb-4 text-lg text-white transition duration-300 rounded-full shadow-md select-none bg-gradient-to-r from-sky-500 to-teal-600 font-roboto">
                                Previewing...
                            </span>
                        </div>
                        
                    </div>
                    <span className="block w-full p-3 text-xl subpixel-antialiased font-light break-words whitespace-pre-line font-nunito">
                        {formik.values.content}
                    </span>
                </section>
            </form>
        </div>
    );
};

export default Content;
