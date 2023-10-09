// Create a set of states needed to be covered
const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

// Define stations and their corresponding covered states
const stations = {
  kone: new Set(["id", "nv", "ut"]),
  ktwo: new Set(["wa", "id", "mt"]),
  kthree: new Set(["or", "nv", "са"]),
  kfour: new Set(["nv", "ut"]),
  kfive: new Set(["ca", "az"]),
};

// Extend the Set prototype to calculate intersection of two sets
Set.prototype.intersection = function (setB) {
  const intersection = new Set();
  for (const elem of setB) {
    if (this.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
};

// Extend the Set prototype to calculate difference between two sets
Set.prototype.difference = function (setB) {
  const difference = new Set(this);
  for (const elem of setB) {
    difference.delete(elem);
  }
  return difference;
};

// Function to count the minimum number of stations needed to cover all states
const countStations = (statesNeeded, stations) => {
  const finalStations = new Set();

  // Continue until all states are covered
  while (statesNeeded.size !== 0) {
    let bestStation = null;
    let statesCovered = new Set();

    // Find the station that covers the maximum number of states
    for (const station in stations) {
      const statesForStation = stations[station];
      const covered = statesNeeded.intersection(statesForStation);

      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }

    // Add the best station to the final set
    finalStations.add(bestStation);
    // Remove the covered states from the statesNeeded set
    statesNeeded = statesNeeded.difference(statesCovered);
  }

  return finalStations;
};

// Measure the execution time of countStations function
console.time("countStations");
console.log(countStations(statesNeeded, stations));
console.timeEnd("countStations");
