import { refreshToken } from "@/util/refreshToken";
import Router from "next/router";

export const refresh = ({ getState }) => next => async (action) => {
    if (
        (action.meta === undefined || action.meta.requestStatus === "pending")
        && (action.type !== undefined && !action.type.includes("taskView"))
    ) {
        const resp = await refreshToken("");
        if (!resp) Router.push("/");
    }
    let result = next(action);
    return result;
};