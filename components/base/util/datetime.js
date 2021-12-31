import moment from "moment";

/**
 * TODO: 
 * 1) Create a moment function that sorts by ascending date according to json data (item.attributes.created_at)
 * 2) Create a moment function that sorts by descending date
 * 3) //!Create a moment function that filters by input date 
 * 4) Create a moment function that filters by task due today?
 * 5) Create a toggleable function that filters by completed and not completed based on current state
 */

/**
 * Turns string into proper format for API to consume.
 * @param {Date} date the datetime in string form
 * @returns {string} the formatted date after processing
 */
function processDate(date) {
    return moment(date).format("DD/MM/YYYY HH:mm");
}

//console.log(processDate(new Date()));

export default processDate;
