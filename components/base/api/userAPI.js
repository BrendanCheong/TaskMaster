import BaseAPI from "./baseAPI.js";
import { refreshToken } from "../util/refreshToken.js";
// TODO: Change the file .js names at the end to blank
class UserAPI extends BaseAPI {

    /**
     * Creates the UserAPI with /users as the initial slug.
     */
    constructor() {
        super();
        this.attachment = "/users";
    }

    slugCombiner(slug) {
        return this.attachment + slug;
    }

    /**
     * For either Login or Registering Users.
     * @param {string} slug 
     * @param {string} data 
     * @returns {object} either true or false if logged in or registered successfully
     */
    userAuth(slug, data) {
        return super.postGetMessage(this.slugCombiner(slug), data);
    }

    userGetData(slug) {
        return super.get(this.slugCombiner(slug));
    }

    userUpdateData(slug, data) {
        return super.put(this.slugCombiner(slug), data);
    }
}

let userAPI = new UserAPI();
userAPI.userAuth("/login", {
    "email": "john@gmail.com",
    "password": "password",
}).then((resp) => console.log(resp));

userAPI.userGetData("/100").then((resp) => console.log(resp));

userAPI.userUpdateData("/1", {
    "name": "JACK",
    "email": "john@gmail.com",
    "password": "newtown",
    "confirm_password": "newtown",
}).then((resp) => console.log(resp));