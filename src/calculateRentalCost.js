/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const LONG_TERM = 7;
const MEDIUM_TERM = 3;
const MEDIUM_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days <= 0) {
    return 0;
  }

  if (days < MEDIUM_TERM) {
    return DAILY_RATE * days;
  } else if (days < LONG_TERM && days >= MEDIUM_TERM) {
    return DAILY_RATE * days - MEDIUM_TERM_DISCOUNT;
  } else if (days >= LONG_TERM) {
    return DAILY_RATE * days - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
