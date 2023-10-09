const graph = {
  start: { a: 6, b: 2 }, // Represents the graph structure with nodes and their neighboring nodes with respective edge costs
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {},
};

const costs = {
  a: 6, // Represents the initial cost from the start node to node 'a'
  b: 2, // Represents the initial cost from the start node to node 'b'
  fin: Infinity, // Represents the initial cost from the start node to the final node ('fin'), set to infinity initially
};

const parents = {
  a: "start", // Represents the parent node of node 'a' in the current optimal path
  b: "start", // Represents the parent node of node 'b' in the current optimal path
  fin: null, // Represents the parent node of the final node ('fin') in the current optimal path
};

const findLowestCostNode = (costs, processed) => {
  let lowestCost = Infinity; // Initialize the lowest cost to infinity
  let lowestCostNode = null; // Initialize the node with the lowest cost to null

  for (const node in costs) {
    // Iterate through each node in the costs object
    const cost = costs[node]; // Get the cost for the current node

    if (cost < lowestCost && !processed.includes(node)) {
      // Check if the cost is lower than the lowest cost and the node has not been processed
      lowestCost = cost; // Update the lowest cost
      lowestCostNode = node; // Update the node with the lowest cost
    }
  }

  return lowestCostNode; // Return the node with the lowest cost
};

const findLowestCostWay = (costs, graph, parents) => {
  const processed = []; // Initialize an array to store processed nodes
  let node = findLowestCostNode(costs, processed); // Find the node with the lowest cost using the findLowestCostNode function

  while (node !== null) {
    // Continue the loop until there are no more nodes to process
    const cost = costs[node]; // Get the cost for the current node
    const neighbors = graph[node]; // Get the neighboring nodes of the current node from the graph

    for (const n in neighbors) {
      // Iterate through each neighbor of the current node
      const newCost = cost + neighbors[n]; // Calculate the new cost from the current node to the neighbor

      if (newCost < costs[n]) {
        // Check if the new cost is lower than the current cost to reach the neighbor
        costs[n] = newCost; // Update the cost to reach the neighbor with the new lower cost
        parents[n] = node; // Update the parent of the neighbor with the current node
      }
    }

    processed.push(node); // Add the current node to the processed nodes array
    node = findLowestCostNode(costs, processed); // Find the next node with the lowest cost
  }

  return { costs, parents, processed }; // Return the final costs, parents, and processed nodes
};

console.time("findLowestCostWay"); // Start a timer to measure the execution time of the algorithm
console.log(findLowestCostWay(costs, graph, parents)); // Call the findLowestCostWay function with the provided initial data and log the result to the console
console.timeEnd("findLowestCostWay"); // End the timer and log the execution time to the console
