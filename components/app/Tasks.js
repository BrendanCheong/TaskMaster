import { useDispatch } from "react-redux";
import { viewTask } from "@/redux/taskViewSlice";
import Tags from "./Tags";
import PropTypes from "prop-types";

const Tasks = ({ title, content, tags, status, endDate, index }) => {

    const dispatch = useDispatch();

    const handleViewTask = () => {
        dispatch(viewTask({
            title: title,
            content: content,
            endDate: endDate,
            status: status,
            tags: tags,
        }));
    };

    return (
        <>
            <div tabIndex={index} className="block px-4 py-2.5 hover:text-slate-700 transition duration-300 rounded-md w-11/12 bg-white text-black
        focus:bg-indigo-600 focus:text-white focus:outline-none justify-items-start" onClick={() => handleViewTask()}> 
                <div className="max-w-sm overflow-hidden rounded-md">
                    <div className="px-6 py-4">
                        <div className="mb-2 text-xl font-bold truncate text-ellipsis">{title}</div>
                        <p className="text-base text-ellipsis">
                            {content}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {tags.map((tag) => <>
                            <Tags 
                                name={tag.tagName}
                                key={tag.id}
                            />
                        </>)}
                    </div>
                </div>
            </div>
        </>
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