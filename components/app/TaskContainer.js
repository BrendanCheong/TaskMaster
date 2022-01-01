import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskAsync } from "@/redux/redux-thunks/taskAsync";
import Tasks from "@/app/Tasks";

const TaskContainer = () => {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(getTaskAsync());
        console.log(tasks);
    }, [dispatch]);

    return (
        <div>
            <div className="overflow-y-scroll h-5/6 md:h-[56rem] scrollbar-thin scrollbar-thumb-indigo-200 hover:scrollbar-thumb-slate-600 transition duration-300 space-y-3">
                {tasks.map((task) => <>
                    <Tasks title={task.attributes.title} 
                        content={task.attributes.content} 
                        tags={task.attributes.tags}
                        key={task.id}
                    />
                </>)}
            </div>
        </div>
    );
};

export default TaskContainer;
