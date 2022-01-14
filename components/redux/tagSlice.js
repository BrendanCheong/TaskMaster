import { createSlice } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "./constants";
import { getTagsAsync } from "./redux-thunks/tagAsync";

const tagSlice = createSlice({
    name: "tagSlice",
    initialState: {
        HTTP: HTTP_STATUS.LOADING,
        tags: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getTagsAsync.fulfilled, getTagsFulfiled)
            .addCase(getTagsAsync.pending, getTagsPending)
            .addCase(getTagsAsync.rejected, getTagsRejected);
    },
});

export const getTagsFulfiled = (state, action) => {
    const tags = action.payload.response.attributes.tags;
    // only get unique tagNames as an string array
    const uniqueTags = [...new Set([...tags].map((tag) => tag.tagName))];
    state.HTTP = HTTP_STATUS.SUCCESS;
    state.tags = uniqueTags;
};

export const getTagsPending = (state, action) => {
    state.HTTP = HTTP_STATUS.PENDING;
};

export const getTagsRejected = (state, action) => {
    state.HTTP = HTTP_STATUS.REJECTED;
};

export default tagSlice.reducer;