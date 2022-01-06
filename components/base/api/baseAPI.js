import axios from "axios";
import { refreshToken } from "../util/refreshToken";
/** //TODO: 1) Get rid of all the console logs at production!
 * 2) get rid of console.errors before using useSWR
 * 
 */
/**
 * Processes the main data, has attributes, type and most importantly ID.
 * Only outputs the first one
 * @param {string} query
 * @param {string} endpoint
 * @returns {object} the data as it is, can be object[]
 */
async function processAttributes(query, endpoint) {
    return query.then((resp) => {
        const data = resp.data.data;
        if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
            // eslint-disable-next-line no-console
            console.info(`data for ${endpoint} : ${JSON.stringify(data)} at status => ${resp.status}`);
        }
        return data;
    }).catch((err) => console.error(err));
}

/**
 * Gets the query message thats either success or error
 * @param {string} query
 * @param {string} endpoint
 * @returns {boolean} whether message was error or success/ false or true.
 */
async function getMessage(query, endpoint) {
    return query.then((resp) => {
        const data = resp.data;
        if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
            // eslint-disable-next-line no-console
            console.info(`data for ${endpoint} : ${JSON.stringify(data)} at status => ${resp.status}`);
        } 
        if (!("error" in data)) {
            return true;
        }
        return false;
    }).catch((err) => console.error(err));;
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
            baseURL: process.env.NEXT_PUBLIC_API_URL, // change to process.env later
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "X-Requested-With": "XMLHttpRequest",
            },
        });
    }

    /**
     * Combines the extra slug with the default attachment.
     * @param {string} slug 
     * @returns {string} combined url
     */
    slugCombiner(slug) {
        return this.attachment + slug;
    }

    /**
     * Post.
     * @param {string} url the target url
     * @param {object} data the data to be sent to rails
     * @returns {Promise}
     */
    apiPost(url, data) {
        return this.axiosInstance.post(url, data);
    }

    /**
     * Get.
     * @param {string} url the target url
     * @returns {Promise}
     */
    apiGet(url) {
        return this.axiosInstance.get(url);
    }

    /**
     * Put.
     * @param {string} url the target url
     * @param {object} data the data to be sent to rails
     * @returns {Promise}
     */
    apiPut(url, data) {
        return this.axiosInstance.put(url, data);
    }

    /**
     * Delete.
     * @param {string} url the target url
     * @param {object} data the data to be sent to rails
     * @returns {Promise}
     */
    apiDelete(url, data) {
        return this.axiosInstance.delete(url, data);
    }

    /**
     * Posts data to rails and see if its successful.
     * @param {string} url 
     * @param {object} data 
     * @returns {boolean} either true or false, posted data is correct or wrong.
     */
    post(url, data) {
        return getMessage(this.apiPost(url, data), url);
    }

    /**
     * Posts data to rails and get the new created output added to database.
     * @param {string} url 
     * @param {object} data 
     * @returns {object}
     */
    postAttributes(url, data) {
        return processAttributes(this.apiPost(url, data), url);
    }

    /**
     * Gets data for single attributes.
     * @param {string} url 
     * @returns {object} returns a single object with all the attributes
     */
    get(url) {
        return processAttributes(this.apiGet(url), url);
    }

    /**
     * Puts will update the table idempotently.
     * @param {string} url 
     * @param {object} data 
     * @returns {boolean} either successfully update true or false.
     */
    put(url, data) {
        return getMessage(this.apiPut(url, data), url);
    }

    /**
     * Puts will update the table and return the new updated entry.
     * @param {string} url 
     * @param {object} data 
     * @returns {object} with the newly changed entry
     */
    putAttributes(url, data) {
        return processAttributes(this.apiPut(url, data), url);
    }

    /**
     * 
     * @param {string} url 
     * @param {object} data 
     * @returns {boolean} either successfully delete or false.
     */
    delete(url, data) {
        return processAttributes(this.apiDelete(url, data), url);
    }

    /**
     * Gets data for multiple attributes.
     * @param {string} url 
     * @returns {object[]} returns an array of objects with all the attributes
     */
    getArray(url) {
        return processAttributes(this.apiGet(url), url);
    }

}

export default BaseAPI;
