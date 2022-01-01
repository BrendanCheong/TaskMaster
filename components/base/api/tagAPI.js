import BaseAPI from "./baseAPI";
// TODO: Change the file .js names at the end to blank

/**
 * The API when querying the tags endpoint.
 */
class TagAPI extends BaseAPI {

    /**
     * Creates the TagAPI with /tags as the initial slug.
     */
    constructor() {
        super();
        this.attachment = "/tags";
    }

    /**
     * Creates new tags in a given array of tags.
     * @param {string} slug 
     * @param {object} data tagName[]: ["Relax", "Holiday", "Shopping"], task_id: 2
     * @returns {boolean} either tag created or not is either true or false
     */
    tagCreate(slug, data) {
        return super.post(super.slugCombiner(slug), data);
    }
}

export default TagAPI;

// let tagAPI = new TagAPI();
// tagAPI.tagCreate("/", {
//     "tagName": ["Relax", "Holiday", "Shopping"],
//     "task_id": 2,
// }).then((resp) => console.log(resp));