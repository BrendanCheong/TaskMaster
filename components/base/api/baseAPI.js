import axios from "axios";
// TODO: Get rid of all the console logs at production!
/**
 * Processes the main data, has attributes, type and most importantly ID
 * @param {string} query
 * @param {string} endpoint
 * @returns {object} the first entry in the data
 */
async function processData(query, endpoint) {
    try {
        const promise = await query;
        const data = promise.data.data;
        console.log(`data for ${endpoint} at status: ${promise.status}`);
        return {
            id: data[0].id,
            type: data[0].type,
            attributes: data[0].attributes,
        };
    } catch (e) {
        console.error(`error from ${endpoint} at status: ${promise.status}`);
        return e.response;
    }
}

/**
 * Processes the relationships the query has to others
 * @param {string} query
 * @param {endpoint} endpoint
 * @returns {object} returns the relationships of the data from API serializer
 */
async function processRelationships(query, endpoint) {
    try {
        const promise = await query;
        const data = promise.data.data;
        console.log(`data for ${endpoint} at status: ${promise.status}`);
        return {
            relationships: data[0].relationships,
        };
    } catch (e) {
        console.error(`error from ${endpoint} at status: ${promise.status}`);
        return e.response;
    }
}
/**
 * Gets the query message thats either success or error
 * @param {string} query
 * @param {string} endpoint
 * @returns {boolean} whether message was error or success/ false or true.
 */
async function getMessage(query, endpoint) {
    try {
        const promise = await query;
        const data = promise.data;
        if (data.success) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.error(e.response.data);
    }
}

/**
 * Connects to the ruby on rails api using Axios.
 */
class BaseAPI {
    /**
     * Creates the axios instance, with the base url to connect to.
     * Credentials are true so that cookies(JWT) can be sent via browser.
     */
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:3000/api/v1",
            withCredentials: true,
            // headers: {
            //     Cookie: "token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSIsInBhc3N3b3JkIjpudWxsLCJuYW1lIjoiSkFDSyIsImV4cCI6MTY0MDUzNjcxMX0.CW9SYnCPEeDPkdQPmu1utygmlJWDauvdvT0evRnEGWY",
            // },
        });
    }

    /**
     *
     * @param {string} url the target url
     * @param {object} data the data to be sent to rails
     * @returns {Promise}
     */
    apiPost(url, data) {
        return this.axiosInstance.post(url, data);
    }

    /**
     *
     * @param {string} url the target url
     * @returns {Promise}
     */
    apiGet(url) {
        return this.axiosInstance.get(url);
    }

    /**
     *
     * @param {string} url the target url
     * @param {object} data the data to be sent to rails
     * @returns {Promise}
     */
    apiPut(url, data) {
        return this.axiosInstance.put(url, data);
    }

    /**
     *
     * @param {string} url the target url
     * @param {object} data the data to be sent to rails
     * @returns {Promise}
     */
    apiDelete(url, data) {
        return this.axiosInstance.delete(url, data);
    }
}
// const login = {
//     email: "john@gmail.com",
//     password: "newtown",
// };
// const nabei = new BaseAPI();

// const promise = nabei.apiPost("/users/login", login);
// getMessage(promise, "limpeh").then((resp) => console.log(resp));
// const test = nabei.apiGet("/users/");
// processRelationships(test, "chi bai kia").then((resp) => console.log(resp));

export default BaseAPI;
