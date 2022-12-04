// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation < 42) {
        
        return 42-pickUpLocation
    } else {
      return  pickUpLocation-42
    }
    //returns the number of blocks given a value
}

function distanceFromHqInFeet(pickUpLocation) {
    distanceFromHqInBlocks();
    return distanceFromHqInFeet-pickUpLocation
}