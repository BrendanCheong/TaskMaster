import { format, parseISO } from "date-fns";


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
 * Turns the string into a proper date object format for Javascript.
 * @param {string} date 
 * @returns {date} the date object from string
 */
export function processString(date) {
    const formattedDate = format(parseISO(date), "dd/MM/yyyy HH:mm");
    return formattedDate;
}

//console.log(processDate(new Date()));

export default processDate;
