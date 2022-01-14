import { createAsyncThunk } from "@reduxjs/toolkit";
import UserAPI from "@/api/userAPI";

let api = new UserAPI();

export const getTagsAsync = createAsyncThunk(
    "tags/getTagsAsync",
    async() => {
        const response = await api.userGetData("/69");
        return { response };
    }
);