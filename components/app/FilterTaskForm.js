import { useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

const FilterTaskForm = () => {

    const BUTTON_STATE = {
        ALL: "all",
        PENDING: "pending",
        COMPLETED: "completed",
    };

    const [tags, setTags] = useState([]);
    const [buttonState, setButtonState] = useState(BUTTON_STATE.ALL);
    const Tags = useSelector((state) => state.tags);

    const handleTagArray = (event, tagArray) => {
        setTags(tagArray);
        console.log(tags);
    }; 

    return (
        <>
            <form className="space-y-3 overflow-hidden bg-transparent font-poppins">
                <div className="px-4 py-2 md:items-start md:pt-5 md:px-6 md:w-full">
                    
                    <div className="flex w-full">
                        <TextField
                            label="Enter Task Title"
                            id="title"
                            size="large"
                            variant="outlined"
                            placeholder="Enter Task Title"
                            height={10}
                            fullWidth
                        />
                        
                    </div>
                </div>
                <div className="px-4 py-2 md:grid md:grid-cols-3 md:items-center md:pt-5 md:px-6 font-roboto">
                    <div className="mt-1 md:mt-0 md:col-span-3">
                        <div className="grid grid-cols-3 gap-3">
                            <button type="button" className={"inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-300 bg-white border rounded-md shadow-sm hover:bg-indigo-800 border-300 hover:bg-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-white" + 
                            (buttonState === BUTTON_STATE.ALL && " bg-indigo-600  text-white" )}
                            onClick={() => setButtonState(BUTTON_STATE.ALL)}>
                                Show all
                            </button>
                            <button type="button" className={"inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-300 bg-white border rounded-md shadow-sm hover:bg-indigo-800 border-300 hover:bg-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-white"+ 
                            (buttonState === BUTTON_STATE.PENDING && " bg-indigo-600  text-white" )}
                            onClick={() => setButtonState(BUTTON_STATE.PENDING)}>
                                Show In Progress
                            </button>
                            <button type="button" className={"inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-300 bg-white border rounded-md shadow-sm hover:bg-indigo-800 border-300 hover:bg-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-white"+ 
                            (buttonState === BUTTON_STATE.COMPLETED && " bg-indigo-600  text-white" )}
                            onClick={() => setButtonState(BUTTON_STATE.COMPLETED)}>
                                Show Completed
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 md:grid md:grid-cols-1 md:items-start md:pt-5 md:px-6 font-roboto">
                    <div className="mt-1 md:mt-0 md:col-span-3">
                        <Autocomplete
                            multiple
                            id="tags-filled"
                            variant="outlined"
                            options={Tags.tags}
                            onChange={handleTagArray}
                            freeSolo
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip 
                                        variant="outlined" 
                                        label={option} 
                                        {...getTagProps({ index })} 
                                        key={index}
                                        color="primary"
                                    />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    label="Enter Tags to Search"
                                    placeholder="Tags"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 px-4 pt-2 pb-4 md:px-6">
                    <div className="flex justify-end">
                        <div className="grid flex-grow grid-cols-1 md:flex-grow-0">
                            <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white transition duration-300 bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => console.log(tags)} type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 mr-3 -ml-1">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                </svg>
                                    Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FilterTaskForm;
