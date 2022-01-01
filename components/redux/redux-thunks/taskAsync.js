import { createAsyncThunk } from "@reduxjs/toolkit";
import TaskAPI from "@/api/taskAPI";

const taskApi = new TaskAPI();
// reducer thunks
export const getTaskAsync = createAsyncThunk(
    "task/getTaskAsync",
    async() => {
        const response = await taskApi.taskGetData("/user_id/300");
        return { response };
    }
);

export const addTaskAsync = createAsyncThunk(
    "task/addTaskAsync/WithTags",
    async(id) => {
        const response = await taskApi.taskGetOne(`/${id}`);
        return { response };
    }
);
// can use for updating the task also
export const toggleTaskStatusAsync = createAsyncThunk(
    "task/toggleTaskStatusAsync",
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