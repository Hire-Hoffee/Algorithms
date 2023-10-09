// Declare an object representing the relationships between persons
const personsTable = {
  You: ["Nina", "Alexander", "Bennett"],
  Alexander: ["Nina", "You", "Abbigail", "Bennett", "Tatiana", "Reecem"],
  Reecem: ["Nina", "Alexander", "Bennett"],
  Bennett: ["Jorden", "Abbigail", "Tatiana"],
  Tatiana: ["Jorden"],
  Nina: ["Alexander", "Jorden"],
  Abbigail: ["You"],
  Jorden: [],
};

// Function to determine if a person's name ends with "m"
const isSeller = (name) => name.slice(-1) === "m";

// Breadth-First Search algorithm to find a person who is a seller within the network
const bfs = (graph, friendsOf) => {
  const queue = []; // Initialize a queue to store persons
  const searched = []; // Initialize an array to store searched persons

  // Add the friends of the starting person to the queue
  queue.push(...graph[friendsOf]);

  // Continue the search until the queue is empty
  while (queue.length !== 0) {
    const person = queue.shift(); // Get the next person from the queue
    const friendsOfPerson = [...graph[person]]; // Get the friends of the person

    // If the person has already been searched, skip to the next iteration
    if (searched.includes(person)) {
      continue;
    }
    // If the person's name ends with "m", they are a seller
    if (isSeller(person)) {
      return person + " is a seller";
    }

    // Add the friends of the person to the queue
    queue.push(...friendsOfPerson);
    searched.push(person); // Add the person to the searched list
  }

  return "Sellers not found";
};

// Measure and log the execution time of Breadth-First Search algorithm
console.time("bfs");
console.log(bfs(personsTable, "You"));
console.timeEnd("bfs");
