import axios from "axios";
/** //TODO: 1) Get rid of all the console logs at production!
 * 2) get rid of console.errors before using useSWR
 * 
 */
/**
 * Processes the main data, has attributes, type and most importantly ID
 * Only outputs the first one
 * @param {string} query
 * @param {string} endpoint
 * @returns {object} the first entry in the data
 */
function processAttributes(query, endpoint) {
    return query.then((resp) => {
        const data = resp.data.data;
        if (process.env.NEXT_PUBLIC_API_URL === "development") {
            // eslint-disable-next-line no-console
            console.info(`data for ${endpoint} : ${data} at status => ${resp.status}`);
        }
        const processedData = data.attributes;
        processedData["id"] = data.id;
        return processedData;
    }).catch((error) => {
        console.error(error);
    });
}

/**
 * Processes the relationships the query has to others
 * @param {string} query
 * @param {endpoint} endpoint
 * @returns {object} returns the relationships of the data from API serializer
 */
function processRelationships(query, endpoint) {
    return query.then((resp) => {
        const data = resp.data;
        if (process.env.NEXT_PUBLIC_API_URL === "development") {
            // eslint-disable-next-line no-console
            console.info(`data for ${endpoint} : ${data} at status => ${resp.status}`);
        }
        return data[0].relationships;
    });

}
/**
 * Gets the query message thats either success or error
 * @param {string} query
 * @param {string} endpoint
 * @returns {boolean} whether message was error or success/ false or true.
 */
function getMessage(query, endpoint) {
    return query.then((resp) => {
        const data = resp.data;
        if (process.env.NEXT_PUBLIC_API_URL === "development") {
            // eslint-disable-next-line no-console
            console.info(`data for ${endpoint} : ${data} at status => ${resp.status}`);
        } 
        if ("success" in data) {
            return true;
        } else {
            return false;
        }
    }).catch((error) => {
        console.error(error);
    });
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
            baseURL: "http://localhost:3000/api/v1", // change to process.env later
            withCredentials: true,
            headers: {
                Cookie: "token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSIsInBhc3N3b3JkIjpudWxsLCJuYW1lIjoiSm9obiIsImV4cCI6MTY0MDg4MjMyNX0.TNVtDKOvmInP9Whi_i5aYhR-7V4YtvadI5edWVA--gA",
            },
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

    postGetMessage(url, data) {
        return getMessage(this.apiPost(url, data), url);
    }

    get(url) {
        return processAttributes(this.apiGet(url));
    }

    put(url, data) {
        return getMessage(this.apiPut(url, data), url);
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
