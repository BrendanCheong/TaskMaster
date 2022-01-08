import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../taskSlice";
import taskViewReducer from "../taskViewSlice";

export default configureStore({
    reducer: {
        tasks: taskReducer,
        taskView: taskViewReducer,
    },
});