function returnFirstTwoDrivers(drivers){
   // const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    console.log(drivers.slice(0, 2));
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers){
   // const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    console.log(drivers.slice(2, 5));
    return drivers.slice(2, 5);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (fareMultiplier){
    return function(fare){
        return fareMultiplier * fare;
    }
}
const fareDoubler = function(fare){
    return fare * 2
}
const fareTripler = function(fare){
    return fare * 3
}          
function selectDifferentDrivers(arrayOfDrivers, driverFunction){
    return driverFunction(arrayOfDrivers)
}
