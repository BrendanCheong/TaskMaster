import cookie from "js-cookie";

/**
 * Sets the cookie on the client side given the JWT token from the API request.
 * @param {string} token 
 */
export const setCookie = (token) => {
    cookie.set("token", token || "error", {
        expires: ONE_HOUR_DURATION,
        secure: true,
        sameSite: "none",
        domain: process.env.NEXT_PUBLIC_API_URL,
    });
};

const ONE_HOUR_DURATION = 1 / 24;