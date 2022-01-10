import { format, parseISO, parse } from "date-fns";


/**
 * TODO: 
 * 1) Create a moment function that sorts by ascending date according to json data (item.attributes.created_at)
 * 2) Create a moment function that sorts by descending date
 * 3) //!Create a moment function that filters by input date 
 * 4) Create a moment function that filters by task due today?
 * 5) Create a toggleable function that filters by completed and not completed based on current state
 */

/**
 * Turns date into proper string format for API to consume.
 * @param {Date} date the datetime in string form
 * @returns {string} the formatted date after processing
 */
function processDate(date) {
    const formattedDate = format(date, ("dd/MM/yyyy HH:mm"));
    return formattedDate;
}

/**
 * Turns the string into a proper desired string date formatted.
 * @param {string} date 
 * @returns {string} the date object from string
 */
export function processString(date) {
    const formattedDate = format(parseISO(date), "dd/MM/yyyy HH:mm");
    return formattedDate;
}

/**
 * Converts string in the dd/MM/yyyy HH:mm format into a Date object.
 * @param {string} date
 * @returns {Date} the date object 
 */
export function processStringToDate(date) {
    return parse(date, "dd/MM/yyyy HH:mm", new Date());
}

//console.log(processDate(new Date()));

export default processDate;
