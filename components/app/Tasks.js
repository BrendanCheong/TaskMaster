import { useDispatch } from "react-redux";
import { viewTask } from "@/redux/taskViewSlice";
import { processDate } from "@/util/datetime";
import Tags from "./Tags";
import PropTypes from "prop-types";

const Tasks = ({ title, content, tags, status, endDate, index }) => {

    const dispatch = useDispatch();

    const handleViewTask = () => {
        const newDate = new Date(endDate);
        newDate.setHours(newDate.getHours() - 8);
        dispatch(viewTask({
            title: title,
            content: content,
            endDate: processDate(newDate),
            status: status,
            tags: tags,
            id: index,
        }));
    };

    return (
        <div>
            <div tabIndex={index} 
                className={"block px-4 py-2.5 hover:text-slate-700 transition duration-300 rounded-md w-11/12 bg-white text-black focus:bg-indigo-600 focus:text-white focus:outline-none justify-items-start " + (status && " bg-opacity-70" || "")} 
                onClick={() => handleViewTask()}> 
                <div className={"max-w-sm overflow-hidden rounded-md" + (status && " line-through" || "")}>
                    <div className="px-6 py-4">
                        <div className="mb-2 text-xl font-bold">{title}</div>
                        <div className="max-h-56 w-full break-words truncate">
                            <p className="text-base whitespace-pre-line">
                                {content}
                            </p>
                        </div>
                        
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {tags.map((tag) => <div key={`${tag.tagName}  ${tag.id}`}>
                            <Tags 
                                name={tag.tagName}
                                id={tag.id}
                            />
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;

Tasks.propTypes = {
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
    index: PropTypes.string.isRequired,
};