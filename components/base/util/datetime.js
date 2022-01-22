import { format, parseISO, parse } from "date-fns";


/**
 * TODO: 
 * 1) Create a moment function that sorts by ascending date according to json data (item.attributes.created_at)
 * 2) Create a moment function that sorts by descending date
 * 3) //!Create a moment function that filters by input date 
 * 4) Create a moment function that filters by task due today?
 * 5) Create a toggleable function that filters by completed and not completed based on current state
 */
const DATE_SLASH_FORMAT = "dd/MM/yyyy HH:mm";
/**
 * Turns date into proper string format for API to consume.
 * @param {Date} date the datetime in string form
 * @param {string} stringFormat how you want the date to be formatted into.
 * @returns {string} the formatted date after processing
 */
export function processDate(date, stringFormat=DATE_SLASH_FORMAT) {
    const formattedDate = format(typeof(date)==="string" ? new Date() : date, (stringFormat));
    return formattedDate;
}

/**
 * Turns the string into a proper desired string date formatted.
 * @param {string} date 
 * @returns {string} the date object from string
 */
export function processString(date) {
    const formattedDate = format(parseISO(date), DATE_SLASH_FORMAT);
    return formattedDate;
}

/**
 * Converts string in the dd/MM/yyyy HH:mm format into a Date object.
 * @param {string} date
 * @param {string} stringFormat the format of the input date string
 * @returns {Date} the date object 
 */
export function processStringToDate(date, stringFormat=DATE_SLASH_FORMAT) {
    return parse(date, stringFormat, new Date());
}

//console.log(processDate(new Date()));

export default processDate;
