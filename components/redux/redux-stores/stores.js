/* eslint-disable no-console */
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { refresh } from "../middleware/refresh";
import taskReducer from "../taskSlice";
import taskViewReducer from "../taskViewSlice";
import tagReducer from "../tagSlice";
import filterReducer from "../filterSlice";

export default configureStore({
    reducer: {
        tasks: taskReducer,
        taskView: taskViewReducer,
        tags: tagReducer,
        filter: filterReducer,
    },
    middleware: [thunk, refresh],
});