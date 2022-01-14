import { useEffect, useCallback  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processString } from "../base/util/datetime";
import { getTaskAsyncWithFilters } from "@/redux/redux-thunks/taskAsync";
import { getTagsAsync } from "@/redux/redux-thunks/tagAsync";
import { unwrapResult } from "@reduxjs/toolkit";
import { VARIANT } from "@/util/popupTypes";
import { useSnackbar } from "notistack";
import Tasks from "@/app/Tasks";

const TaskContainer = () => {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    const filter = useSelector((state) => state.filter);

    const { enqueueSnackbar } = useSnackbar();

    const handlePopup = (message, variant) => {
        enqueueSnackbar(message, {
            variant: variant,
        });
    };

    const handleError = useCallback((message, variant) => {
        handlePopup(message, variant);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // must send whole filter payload as asyncthunk will handle grabbing only the tagName attribute
        dispatch(getTaskAsyncWithFilters(filter))
            .then(unwrapResult)
            .then(() => {
                dispatch(getTagsAsync());
            })
            .catch((err) => {
                handleError(`Displaying All Tasks Error: ${err}`, VARIANT.ERROR);
            });
        // runs once or when tasks array changes
    }, [dispatch, filter, handleError]);

    return (
        <div>
            <div className="overflow-y-scroll h-[36rem] md:h-[56rem] scrollbar-thin scrollbar-thumb-indigo-200 hover:scrollbar-thumb-slate-600 transition duration-300 space-y-3">
                {tasks.map((task) => <div key={`${task.attributes.title} ${task.id}`}>
                    <Tasks title={task.attributes.title} 
                        content={task.attributes.content} 
                        tags={task.attributes.tags}
                        status={task.attributes.status}
                        endDate={processString(task.attributes.endDate)}
                        index={task.id}
                    />
                </div>)}
            </div>
        </div>
    );
};

export default TaskContainer;
