/* eslint-disable no-console */
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { logger } from "../middleware/logger";
import { refresh } from "../middleware/refresh";
import taskReducer from "../taskSlice";
import taskViewReducer from "../taskViewSlice";
import tagReducer from "../tagSlice";

export default configureStore({
    reducer: {
        tasks: taskReducer,
        taskView: taskViewReducer,
        tags: tagReducer,
    },
    middleware: [thunk, refresh, logger],
});