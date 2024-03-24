// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(blockNumber) {
  // Assuming headquarters is at block 42
  const hqBlock = 42;
  return Math.abs(blockNumber - hqBlock);
}

// Function to calculate distance from headquarters in feet
function distanceFromHqInFeet(blockNumber) {
  // Assuming 1 block = 264 feet
  return distanceFromHqInBlocks(blockNumber) * 264;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
  // Assuming 1 block = 264 feet
  return Math.abs(endBlock - startBlock) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  let fare = 0;

  // Base fare and rates
  const baseFare = 2.50;
  const perFootCharge = 0.02;
  const maxDistanceFree = 400;
  const maxDistanceDiscounted = 2000;
  const maxDistanceAllowed = 2500; // Maximum distance allowed

  // Conditions to calculate fare
  if (distanceInFeet <= maxDistanceFree) {
      fare = 0;
  } else if (distanceInFeet <= maxDistanceDiscounted) {
      fare = (distanceInFeet - maxDistanceFree) * perFootCharge;
  } else if (distanceInFeet <= maxDistanceAllowed) {
      fare = 25; // Fare for distance over 2000 feet
  } else {
      fare = 'cannot travel that far'; // Distance exceeds maximum allowed
  }

  return fare;
}


// Exporting functions
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};
