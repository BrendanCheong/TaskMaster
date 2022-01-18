import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addTaskAsync, updateTaskAsync } from "@/redux/redux-thunks/taskAsync";
import { viewTask } from "@/redux/taskViewSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { VARIANT } from "@/util/popupTypes";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import processDate from "@/util/datetime";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import TagsInput from "./TagsInput";

const Content = ({ title, content, endDate, tags, status, editMode, id }) => {

    /**
     * The old tags array. 
     */
    const oldTagArray = tags.length > 0
        ? tags.map((tag) => tag.id)
        : tags;

    const [tagArray, setTagArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

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
            status: status,
        },
        onSubmit: (values) => {
            const payload = values;
            payload["tags"] = tagArray;
            payload["endDate"] = processDate(values["endDate"]);
            editMode 
                ? edit(payload) 
                : submit(payload);
        },
        validationSchema: validationTaskSchema,
    });

    const submit = (payload) => { 
        setLoading(true);
        dispatch(addTaskAsync(payload))
            .then(unwrapResult)
            .then((res) => {
                setLoading(false);
                payload["id"] = res.response.id;
                payload["tags"] = res.response.attributes.tags;
                dispatch(viewTask(payload));
            })
            .catch((err) => handlePopup(`Add Task Error: ${err}` , VARIANT.ERROR));
    };

    const edit = (payload) => {
        payload["id"] = id;
        payload["tagIds"] = oldTagArray;
        setLoading(true);
        dispatch(updateTaskAsync(payload))
            .then(unwrapResult)
            .then((res) => {
                setLoading(false);
                payload["tags"] = res.response.attributes.tags;
                dispatch(viewTask(payload));
            })
            .catch((err) => handlePopup(`Edit Task Error: ${err}` , VARIANT.ERROR));
    };

    const { enqueueSnackbar } = useSnackbar();

    const handlePopup = (message, variant) => {
        enqueueSnackbar(message, {
            variant: variant,
        });
    };

    return (
        <div className="bg-zinc-100 flex-row flex-1 w-full h-full p-5 text-2xl">
            <form className="rounded-xl flex flex-row w-full h-full p-2 bg-white shadow-lg" id="input forms" onSubmit={formik.handleSubmit}>
                <section className="md:w-4/12 flex flex-col w-full p-3 space-y-8">
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
                        inputFormat={"dd/MM/yyyy HH:mm"}
                    />
                    <TagsInput
                        selectedTags={(tagArray) => setTagArray(tagArray)}
                        fullWidth
                        variant="outlined"
                        id="tags"
                        tagArray={tags.map((tag) => tag.tagName)}
                        name="Add tags"
                        placeholder="Add Task Tags"
                        label="Tags"
                        onKeyPress={e => { e.which === 13 && e.preventDefault(); }}
                    />
                    <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-800 hover:to-violet-900 font-roboto md:hidden w-40 h-10 px-5 py-1 mb-4 text-lg text-white transition duration-300 shadow-md" type="submit">
                        Submit!
                    </button>
                </section>
                <section className="sm:flex sm:flex-col sm:p-3 sm:space-y-16 sm:w-8/12 hidden h-full" id="preview form">
                    <div className="h-1/2 flex flex-row w-full">
                        <h1 className="font-poppins w-1/2 p-3 text-5xl font-bold truncate">
                            {formik.values.title}
                        </h1>
                        <div className="justify-items-end flex flex-row items-end w-1/2 p-3 space-x-6">
                            {
                                loading
                                    ? <>
                                        <button className="bg-gradient-to-r from-indigo-600 to-violet-700 font-roboto w-40 h-10 px-5 py-1 mb-4 text-lg text-white transition duration-300 rounded-full shadow-md">
                                            Loading...
                                        </button>
                                    </>
                                    : <>
                                        <button className="bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-800 hover:to-violet-900 font-roboto w-40 h-10 px-5 py-1 mb-4 text-lg text-white transition duration-300 rounded-full shadow-md" type="submit">
                                            Submit!
                                        </button>
                                    </>
                            }
                            <span className="items-center w-40 h-10 px-5 py-[0.35rem] mb-4 text-lg text-center text-white transition duration-300 rounded-full shadow-md select-none bg-gradient-to-r from-sky-500 to-teal-600 font-roboto">
                                Previewing...
                            </span>
                        </div>
                        
                    </div>
                    <span className="font-roboto h-1/2 block w-full text-xl subpixel-antialiased font-light break-words whitespace-pre-line">
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
    tags: [],
    status: false,
    editMode: false,
    id: "0",
};

Content.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    endDate: PropTypes.instanceOf(Date),
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        tagName: PropTypes.string.isRequired,
        task_id: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
    })).isRequired,
    status: PropTypes.bool.isRequired,
    editMode: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
};