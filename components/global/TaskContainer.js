import Tasks from "@/app/Tasks";

const TaskContainer = () => {
    return (
        <div>
            <div className="overflow-y-scroll h-5/6 md:h-[56rem] scrollbar-thin scrollbar-thumb-indigo-200 hover:scrollbar-thumb-slate-600 transition duration-300 space-y-3">
                {[...Array(100).keys()].map((elem) => <>
                    <Tasks keys={elem}/>
                </>)}
            </div>
        </div>
    );
};

export default TaskContainer;
