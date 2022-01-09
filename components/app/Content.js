import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAsync } from "@/redux/redux-thunks/taskAsync";
import { viewTask } from "@/redux/taskViewSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import processDate from "@/util/datetime";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import TagsInput from "./TagsInput";

const Content = ({ title, content, endDate }) => {

    const [tagArray, setTagArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    /**
     * Creates a new fake id for the newly created task to view the new task created.
     * Only works on Chrome 92+ and >= Node v16.0
     * @param {object[]} tasks all current tasks
     * @returns {string} new fake id to be used for generating task view when adding tasks
     */
    const newLastId = (tasks) => {
        const task = tasks.at(-1);
        const newId = (parseInt(task.id) + 1).toString();
        return newId;
    };

    const validationTaskSchema = yup.object({
        title: yup.string().required("Task Title is Required"),
        content: yup.string(),
        endDate: yup.date().min(
            new Date(Date.now() - 86400000),
            "End Date Cannot be in the Past!"
        ),
        status: yup.boolean(),
    });

    const formik = useFormik({
        initialValues: {
            title: title,
            content: content,
            endDate: endDate,
            status: false,
        },
        onSubmit: (values) => {
            const payload = values;
            payload["tags"] = tagArray;
            payload["endDate"] = processDate(values["endDate"]);
            submit(payload);
        },
        validationSchema: validationTaskSchema,
    });

    const submit = (payload) => { 
        setLoading(true);
        dispatch(addTaskAsync(payload))
            .then(unwrapResult)
            .then(() => {
                setLoading(false);
                payload["id"] = newLastId(tasks);
                dispatch(viewTask(payload));
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="flex-row flex-1 w-full h-full p-5 text-2xl bg-zinc-100">
            <form className="flex flex-row w-full h-full p-2 bg-white shadow-lg rounded-xl" id="input forms" onSubmit={formik.handleSubmit}>
                <section className="flex flex-col w-full p-3 space-y-8 md:w-4/12">
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
                        inputFormat={"dd/MM/yyyy HH:mm"}
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
                    <button className="w-40 h-10 px-5 py-1 mb-4 text-lg text-white transition duration-300 shadow-md rounded-xl bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-800 hover:to-violet-900 font-roboto md:hidden" type="submit">
                        Submit!
                    </button>
                </section>
                <section className="hidden h-full sm:flex sm:flex-col sm:p-3 sm:space-y-16 sm:w-8/12" id="preview form">
                    <div className="flex flex-row w-full h-1/2">
                        <h1 className="w-1/2 p-3 text-5xl font-bold truncate font-poppins">
                            {formik.values.title}
                        </h1>
                        <div className="flex flex-row items-end w-1/2 p-3 space-x-6 justify-items-end">
                            {
                                loading
                                    ? <>
                                        <button className="w-40 h-10 px-5 py-1 mb-4 text-lg text-white transition duration-300 rounded-full shadow-md bg-gradient-to-r from-indigo-600 to-violet-700 font-roboto">
                                            Loading...
                                        </button>
                                    </>
                                    : <>
                                        <button className="w-40 h-10 px-5 py-1 mb-4 text-lg text-white transition duration-300 rounded-full shadow-md bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-800 hover:to-violet-900 font-roboto" type="submit">
                                            Submit!
                                        </button>
                                    </>
                            }
                            <span className="items-center w-40 h-10 px-5 py-[0.35rem] mb-4 text-lg text-center text-white transition duration-300 rounded-full shadow-md select-none bg-gradient-to-r from-sky-500 to-teal-600 font-roboto">
                                Previewing...
                            </span>
                        </div>
                        
                    </div>
                    <span className="block w-full text-xl subpixel-antialiased font-light break-words whitespace-pre-line font-roboto h-1/2">
                        {formik.values.content}
                    </span>
                </section>
            </form>
        </div>
    );
};

export default Content;

Content.defaultProps = {
    title: "",
    content: "",
    endDate: new Date(),
};

Content.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    endDate: PropTypes.instanceOf(Date),
};