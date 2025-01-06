const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]' || date[Symbol.toStringTag]) {
    throw new Error('Invalid date!');
  }
  if ([12, 1, 2].includes(date.getMonth() + 1)) {
    return 'winter';
  } else if ([3, 4, 5].includes(date.getMonth() + 1)) {
    return 'spring';
  } else if ([6, 7, 8].includes(date.getMonth() + 1)) {
    return 'summer';
  } else if ([9, 10, 11].includes(date.getMonth() + 1)) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
