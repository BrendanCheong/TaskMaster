import { useState } from "react";
import { useDispatch } from "react-redux";
import { viewTaskToggleStatus, editTaskState, resetTaskState } from "@/redux/taskViewSlice";
import { toggleTaskStatusAsync, deleteTaskAsync } from "@/redux/redux-thunks/taskAsync";
import { unwrapResult } from "@reduxjs/toolkit";
import PropTypes from "prop-types";

const ViewTask = ({ 
    title,
    content,
    endDate,
    tags,
    status,
    id }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [deleteButtonLoading, setDeleteButtonLoading] = useState(false);

    const handleCompletion = () => {

        const payload = {
            id: id,
            status: !status,
            endDate: endDate,
            tags: [],
            tagIds: [],
        };
        setLoading(true);
        dispatch(toggleTaskStatusAsync(payload))
            .then(unwrapResult)
            .then(() => {
                setLoading(false);
                dispatch(viewTaskToggleStatus(payload));
            })
            .catch((err) => console.error(err));
    };

    const handleDelete = () => {
        setDeleteButtonLoading(true);
        dispatch(deleteTaskAsync(id))
            .then(unwrapResult)
            .then(() => {
                setDeleteButtonLoading(false);
                dispatch(resetTaskState({
                    showState: "DEFAULT",
                }));
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="flex-col flex-1 w-full h-full p-5 space-y-24 text-4xl bg-zinc-100 font-poppins">
            <div className="w-full h-full p-5 space-y-5 bg-white shadow-lg rounded-xl">
                <div className="relative flex flex-col md:flex-row">
                    <h1 className={"p-3 font-bold" + (
                        status    
                            ? " opacity-30 line-through"
                            : ""
                    )}>{title}</h1>
                    <div className="flex flex-row p-3 space-x-6 text-base md:absolute md:right-0 md:top-0 font-roboto">
                        <button className="px-4 py-2 text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-700"
                            onClick={() => dispatch(editTaskState({ showState: "EDIT" }))}>
                            edit
                        </button>
                        {
                            deleteButtonLoading
                                ? <>
                                    <button className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded-md"
                                    >   
                                    Loading...
                                    </button>
                                </>
                                : <>
                                    <button className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-700"
                                        onClick={() => handleDelete()}>   
                                        delete
                                    </button>
                                </>
                        }
                        {status
                            ? <>
                                {
                                    loading
                                        ? <>
                                            <button className="px-4 py-2 text-sm text-white transition duration-300 bg-teal-500 rounded-md "
                                            >Loading...</button>
                                        </>
                                        : <>
                                            <button className="px-4 py-2 text-sm text-white transition duration-300 bg-teal-500 rounded-md hover:bg-teal-700"
                                                onClick={() => handleCompletion()}>Completed</button>
                                        </>
                                }
                            </>
                            : <>
                                {
                                    loading
                                        ? <>
                                            <button className="px-4 py-2 text-sm text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-700"
                                            >Loading...</button>
                                        </>
                                        : <>
                                            <button className="px-4 py-2 text-sm text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-700"
                                                onClick={() => handleCompletion()}>Set Complete</button>
                                        </>
                                }
                            </>}
                    </div>
                </div>
                <p className={"block w-full p-3 text-xl subpixel-antialiased font-light break-words whitespace-pre-line font-roboto" + (
                    status    
                        ? " opacity-30 line-through"
                        : ""
                )}>
                    {content}
                </p>
                <div className={"flex items-center justify-center md:p-5 " + (
                    status    
                        ? " opacity-30"
                        : ""
                )}>
                    <h2 className="w-8/12 px-5 py-2 text-base text-center text-white bg-indigo-600 rounded-3xl md:w-1/6" id="deadline">
                        {endDate}
                    </h2>
                </div>
                
                <section className={"container mx-auto" + (
                    status    
                        ? " opacity-30"
                        : ""
                )}>
                    {tags.map((tag) => <div key={`${tag.tagName} ${tag.id}`}>
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
                        >
                            {`#${tag.tagName}`}
                        </span>
                    </div>)}
                </section>
            </div>
        </div>
    );
};

export default ViewTask;

ViewTask.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        tagName: PropTypes.string.isRequired,
        task_id: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
    })).isRequired,
    status: PropTypes.bool.isRequired,
    endDate: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};