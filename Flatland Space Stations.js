// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {

 let maxDistance = 0;

  // Every city has a space station;
  if (n === c.length) {
    return maxDistance;
  }

  const sortedC = c.sort((a, b) => a - b);

  // Calculate distance from the first city to the first space station
  const firstDistance = sortedC[0] - 0;
  // Calculate distance from the last city to the last space station
  const lastDistance = n - 1 - sortedC[sortedC.length - 1];

  maxDistance = firstDistance > lastDistance ? firstDistance : lastDistance;

  // Calculate the middle sections. Between two space stations, find the longest distance from a city to a space station.
  for (let i = 0; i < sortedC.length - 1; i++) {
    let distance = Math.floor((sortedC[i + 1] - sortedC[i]) / 2);
    if (distance > maxDistance) {
      maxDistance = distance;
    }
  }
  return maxDistance;
}
