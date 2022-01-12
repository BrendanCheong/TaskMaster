/* eslint-disable no-console */

/**
 * Refreshes the existing token of the user. If token expired, return false.
 * This is server side code.
 * @param {string} token the http only cookie
 * @returns {boolean} either the user refreshes token or has token expired
 */
export async function refreshToken(token) {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Accept": "*/*",
        };
        if (token) headers["Cookie"] = token;
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/users/refresh`, 
            { 
                method: "GET",
                credentials: "include",
                headers: headers,
            });
        const data = await response.json();
        if (process.env.NEXT_PUBLIC_APP_ENV === "development") console.log(data);

        if ("success" in data) {
            return true;
        } else {
            throw new Error(data.error);
        }
    } catch (e) {
        if (process.env.NEXT_PUBLIC_APP_ENV === "development") console.error(e);
        return false;
    }
};