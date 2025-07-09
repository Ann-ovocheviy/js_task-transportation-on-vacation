/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days <= 0) {
    return 0;
  }

  const dailyRate = 40;

  if (days < 3) {
    return dailyRate * days;
  } else if (days < 7 && days >= 3) {
    return dailyRate * days - 20;
  } else if (days >= 7) {
    return dailyRate * days - 50;
  }
}

module.exports = calculateRentalCost;
