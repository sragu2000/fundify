/**
 * This function formats a date string into a more readable format.
 *
 * @param {string} dateString - The date string to be formatted. It should be in a format that can be parsed by the Date constructor.
 * @returns {string} - The formatted date string.
 *
 * @example
 * formatDate('2022-01-01') // returns 'January 1, 2022'
 *
 * @throws {TypeError} If the provided dateString cannot be parsed by the Date constructor.
 */
export function formatDate(dateString) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new TypeError("Invalid date string");
  }

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

/**
 * Convert an ISO 8601 date string to a date string in the format "YYYY-MM-DD".
 * @param {string} value - The ISO 8601 date string to convert.
 * @returns {string} - The date string in the format "YYYY-MM-DD", or an empty string if the input value is undefined or null.
 */
export const ISO_to_HTML_Format = (value) => {
  if (value) {
    return new Date(value).toISOString().split("T")[0];
  }
  return "";
};

/**
 * Converts a date string in the format "YYYY-MM-DD" to ISO 8601 format "YYYY-MM-DDTHH:mm:ss.sssZ".
 * If the input value is not provided, returns an empty string.
 * @param {string} value - The date string in "YYYY-MM-DD" format to be converted to ISO format.
 * @returns {string} - The date string converted to ISO 8601 format, or an empty string if no value is provided.
 */
export const HTML_to_ISO_Format = (value) => {
  // convert 2015-02-15 to 2024-02-15T00:00:00.000Z
  if (value) {
    return new Date(value).toISOString();
  } else {
    return "";
  }
};

/**
 * Merges a date string and a time string into a single UTC datetime string in ISO 8601 format.
 *
 * @param {string} dateString - The date string in "YYYY-MM-DD" format.
 * @param {string} timeString - The time string in "HH:mm" format.
 * @returns {string} - The merged datetime string in ISO 8601 format.
 *
 * @throws {TypeError} If the dateString or timeString cannot be parsed.
 *
 * @example
 * mergeDateAndTimeToUTC('2022-01-01', '12:30') // returns '2022-01-01T12:30:00.000Z'
 *
 * @note Assumes that the input dateString and timeString are valid and in the correct format.
 * @note Assumes that the input timeString is in 24-hour format.
 * @note Assumes that the input timeString does not include seconds.
 */
export function mergeDateAndTimeToUTC(dateString, timeString) {
  // Convert date string to Date object
  const date = new Date(dateString);

  // Split time string into hours and minutes
  const [hours, minutes] = timeString.split(":").map(Number);

  // Set hours and minutes to date object
  date.setUTCHours(hours);
  date.setUTCMinutes(minutes);
  date.setUTCSeconds(0); // Assuming seconds are 0

  return date.toISOString(); // Return merged datetime in ISO format
}

// Example usage:
// const date ="2024-06-06";
// const time = "22:12";
// const mergedDateTimeUTC = mergeDateAndTimeToUTC(date, time);
// console.log(mergedDateTimeUTC);

/**
 * Converts a UTC datetime string in ISO 8601 format to a 24-hour time string in the format "HH:mm".
 *
 * @param {string} dateString - The UTC datetime string in ISO 8601 format to convert.
 * @returns {string} - The 24-hour time string in the format "HH:mm".
 *
 * @throws {TypeError} If the dateString cannot be parsed.
 *
 * @example
 * get24HourTimeFromUTC('2022-01-01T12:30:00.000Z') // returns '12:30'
 *
 * @note Assumes that the input dateString is a valid ISO 8601 datetime string.
 * @note Assumes that the input dateString is in UTC timezone.
 * @note Assumes that the output time string is in 24-hour format.
 * @note Assumes that the output time string does not include seconds.
 */
export function get24HourTimeFromUTC(dateString) {
  const date = new Date(dateString);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}


export function isWithinSevenDays(date) {
  // Get the current date
  const currentDate = new Date();
  
  // Get the given date
  const givenDate = new Date(date);
  
  // Calculate the difference in milliseconds
  const diffInMilliseconds = Math.abs(currentDate - givenDate);
  
  // Convert milliseconds to days
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  
  // Check if the difference is less than or equal to 7 days
  return diffInDays <= 7;
}