import { createAsyncThunk } from "@reduxjs/toolkit";
import TaskAPI from "@/api/taskAPI";

const taskApi = new TaskAPI();
// reducer thunks

export const getTaskAsyncWithFilters = createAsyncThunk(
    "task/getTaskAsyncWithFilters",
    async(payload) => {
        const response = await taskApi.taskFilterTagName("/tag_filter", {
            tagName: payload.tagName,
        });
        // payload is the current filter state, contains: buttonState:str, task:str, tagName[]:str
        // filterPayload contains the types of filters you want to add
        // status:bool => whether task is completed or not
        // search:str => input for fuzzy search of task titles
        const filterPayload = {
            status: null,
            search: null,
        };
        if (payload.buttonState !== "all") {
            filterPayload.status = FILTERS[payload.buttonState];
        }

        if (payload.task !== "") {
            filterPayload.search = payload.task;
        }
        response["filter"] = filterPayload;
        return { response };
    }
);

export const addTaskAsync = createAsyncThunk(
    "task/addTaskAsync/WithTags",
    async(payload) => {
        const response = await taskApi.taskCreate("/", payload);
        return { response };
    }
);

export const toggleTaskStatusAsync = createAsyncThunk(
    "task/toggleTaskStatusAsync",
    async(payload) => {
        const response = await taskApi.taskPut(`/${payload.id}`, payload);
        return { response };
    }
);

export const updateTaskAsync = createAsyncThunk(
    "task/updateTaskAsync",
    async(payload) => {
        const response = await taskApi.taskPut(`/${payload.id}`, payload);
        return { response };
    }
);

export const deleteTaskAsync = createAsyncThunk(
    "task/deleteTaskAsync",
    async(id) => {
        const response = await taskApi.taskDelete(`/${id}`);
        return { response };
    }
);

const FILTERS = {
    completed: true,
    pending: false,
};