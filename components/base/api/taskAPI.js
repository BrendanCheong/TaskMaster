import BaseAPI from "./baseAPI";
import { refreshToken } from "../util/refreshToken";
// TODO: Change the file .js names at the end to blank

/**
 * The task API when querying the task endpoint.
 */
class TaskAPI extends BaseAPI {

    /**
     * Creates the TaskAPI with /tasks as the initial slug.
     */
    constructor() {
        super();
        this.attachment = "/tasks";
    }

    /**
     * Adds a new task into the database, unique id auto generated.
     * Associated to user based on JWT token.
     * @param {string} slug 
     * @param {object} data title, content, status: true/false, endDate: dd/mm/yyyy HH:MM
     * @returns {boolean} either true for successfully added or false for fail to add
     */
    taskCreate(slug, data) {
        return super.post(super.slugCombiner(slug), data);
    }

    /**
     * Gets all the task associated with the current user sending the request.
     * Uses JWT to know which user sent the request.
     * @param {string} slug 
     * @returns {object[]} an array of task data with associated tags as nested array
     */
    taskGetData(slug) {
        return super.getArray(super.slugCombiner(slug));
    }

    /**
     * Gets all the tasks associated with the array of tag names.
     * @param {string} slug 
     * @param {data} data tagName[]: ["Leisure", "Work", "Fun"]
     * @returns {object[]}an array of task data with associated tags as nested array
     */
    taskFilterTagName(slug, data) {
        return super.postArray(super.slugCombiner(slug), data);
    }

    /**
     * Deletes a task given the task id in the slug.
     * @param {string} slug task id to delete 
     * @param {object} data empty object
     * @returns {boolean} either task deleted or not deleted which is true or false
     */
    taskDelete(slug, data) {
        return super.delete(super.slugCombiner(slug), data);
    }

    /**
     * Updates a new task according to the tasks id in the slug
     * @param {string} slug 
     * @param {object} data 
     * @returns {object} the newly changed task after successfull creating it
     */
    taskPut(slug, data) {
        return super.putAttributes(super.slugCombiner(slug), data);
    }
}

export default TaskAPI;

//let taskAPI = new TaskAPI();

// taskAPI.taskCreate("/", {
//     "title": "Dont you need somebody to love?",
//     "content": "Jefferson Airplane",
//     "status": true,
//     "endDate": "26/12/2022 10:25",
// }).then((resp) => console.log(resp));

// taskAPI.taskGetData("/user_id/300").then((resp) => console.log(resp));

// taskAPI.taskFilterTagName("/tag_filter", {
//     tagName: ["Work"],
// }).then((resp) => console.log(resp));

// taskAPI.taskDelete("/6", {}).then((resp) => console.log(resp));

// taskAPI.taskPut("/1", {
//     "title": "Make a rap album",
//     "content": "Its rapping time",
//     "status": false,
//     "endDate": "26/12/2022 10:25",
// }).then((resp) => console.log(resp));