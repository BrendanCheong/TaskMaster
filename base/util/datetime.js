import moment from "moment";

/**
 * Turns string into proper format for API to consume.
 * @param {Date} date the datetime in string form 
 * @returns {string} the formatted date after processing
 */
function processDate(date) {
    return moment(date).format("DD/MM/YYYY HH:mm");
};

//console.log(processDate(new Date()));

export default processDate;