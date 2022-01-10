import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processString } from "../base/util/datetime";
import { getTaskAsync } from "@/redux/redux-thunks/taskAsync";
import Tasks from "@/app/Tasks";

const TaskContainer = () => {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(getTaskAsync());
        // runs once or when tasks array changes
    }, [dispatch]);

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
