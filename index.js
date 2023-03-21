// Code your solution in this file
const returnFirstTwoDrivers = array => array.slice(0, 2)
const returnLastTwoDrivers = array => array.slice(-2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = num => {
    return function(multiplier) {
        return multiplier * num;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers)
}