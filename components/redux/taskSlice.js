import { createSlice } from "@reduxjs/toolkit";
import { taskData } from "./data";

const taskSlice = createSlice({
    name: "tasks",
    initialState: taskData,
    reducers: {

    },
});