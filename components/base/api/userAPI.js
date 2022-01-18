import BaseAPI from "./baseAPI";
// TODO: Change the file .js names at the end to blank

/**
 * The user API when querying the user endpoint.
 */
class UserAPI extends BaseAPI {

    /**
     * Creates the UserAPI with /users as the initial slug.
     */
    constructor() {
        super();
        this.attachment = "/users";
    }

    /**
     * For either Login or Registering Users.
     * @param {string} slug extra url to be passed
     * @param {object} data email, password
     * @returns {object} JWT Token in the response.
     */
    userAuth(slug, data) {
        return super.apiPost(super.slugCombiner(slug), data)
            .then((data) => data)
            .catch(() => false);
    }

    /**
     * Gets all the user data, based on JWT token info.
     * Includes tasks and tags associated with user.
     * @param {string} slug extra url to be passed
     * @returns {object} the user data, attributes and id
     */
    userGetData(slug) {
        return super.get(super.slugCombiner(slug));
    }

    /**
     * Updates the user details, using current JWT (note user_id still remains the same).
     * NOTE: you cannot send duplicate emails or else {error} will exist.
     * @param {string} slug extra url to be passed
     * @param {object} data name(opt), email(opt), password(req), confirm_password(req)
     * @returns {boolean} either true or false if updated successfully
     */
    userUpdateData(slug, data) {
        return super.put(super.slugCombiner(slug), data);
    }
}

export default UserAPI;

//let userAPI = new UserAPI();
// userAPI.userAuth("/login", {
//     "email": "john@gmail.com",
//     "password": "password",
// }).then((resp) => console.log(resp));

//userAPI.userGetData("/100").then((resp) => console.log(resp.tags));

// userAPI.userUpdateData("/1", {
//     "name": "JACK",
//     "email": "john@gmail.com",
//     "password": "newtown",
//     "confirm_password": "newtown",
// }).then((resp) => console.log(resp));