import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { addTaskAsync, toggleTaskStatusAsync, deleteTaskAsync } from "@/redux/redux-thunks/taskAsync";
import { unwrapResult } from "@reduxjs/toolkit";
import TaskAPI from "@/api/taskAPI";
import TagAPI from "@/api/tagAPI";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils";

const Login = () => {

    const dispatch = useDispatch();
    // grab current store's state, we choose task state
    const tasks = useSelector((state) => state.tasks);
    const state = useSelector((state) => state);

    const addTagArray = async (tagArray, id) => {
        try {
            const tagApi = new TagAPI();
            const tagResponse = await tagApi.tagCreate("/", {
                tagName: tagArray,
                task_id: id,
            });
            return tagResponse;
        } catch (e) {
            console.error(e);
        }
    };

    const addTaskButton = async (payload, tagArray) => {
        try {
            payload["tags"] = tagArray;
            console.log(payload);
            const taskApi = new TaskAPI();
            const data = await taskApi.taskCreate("/", payload);
            console.log(data);
            // const id = data.id;
            // if (tagArray.length > 0) {
            //     await addTagArray(tagArray, id);
            // }
            // dispatch(addTaskAsync(id));
        } catch (e) {
            console.error(e);
        }

    };

    const handleCompleteClick = () => {
        // must have id!, also only 1 argument!
        dispatch(
            toggleTaskStatusAsync({
                "status": !tasks[0].attributes.status,
                "id": 1,
            })
        );
    };

    const handleDeleteClick = (id) => {
        dispatch(deleteTaskAsync(id));
    };

    const loginPost = async() => {
        try {
            const post = {
                "email": "john@gmail.com",
                "password": "password",
            };
            const response = await axios.post("http://localhost:3000/api/v1/users/login", post, { withCredentials: true });
            console.log(response.data);
        } catch(e) {
            console.error(e.response);
        }
    };

    const refresh = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/users/refresh", {  withCredentials: true  });
            console.log(response.data);
        } catch(e) {
            console.error(e.response.data);
        }
    };

    return (
        <div className="flex items-center justify-center place-content-center place-self-center" id="temporary">
            <button className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-700" onClick={() => loginPost()}>
                Login
            </button>
            <button className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-700" onClick={() => refresh()}>
                Register
            </button>
            <button className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-700" onClick={() => addTaskButton({
                // form has to validate and create the new task
                title: "Pills",
                content: "Take some pills",
                status: false,
                endDate: "27/1/2022 11:00",
            }, ["Tag1", "Tag2", "Tag3"])}>
                addTask
            </button>
            <button className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-700" onClick={() => Router.push("/todo")}>
                redirect
            </button>
            <button className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-700" onClick={() => handleCompleteClick()}>
                {"toggle " + tasks[0]}
            </button>
            <button className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-700" onClick={() => handleDeleteClick(8)}>
                delete
            </button>
        </div>
    );
};

export default Login;
