/* eslint-disable no-console */
import axios from "axios";

/**
 * Refreshes the existing token of the user. If token expired, return false.
 * @returns {boolean} either the user refreshes token or has token expired
 */
export async function refreshToken() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/refresh`, { withCredentials: true });
        const data = response.data;
        if (process.env.NEXT_PUBLIC_APP_ENV === "development") console.log(data);

        if ("success" in data) {
            return true;
        } else {
            throw new Error(data);
        }
    } catch (e) {
        if (process.env.NEXT_PUBLIC_APP_ENV === "development") console.error(e.response.data);
        return false;
    }
};