// Declare an object representing a table of individuals and their voting status
const isVotedTable = {
  Mike: false,
  James: true,
  Maria: false,
};

// Function to determine if a person is allowed to vote
const allowVote = (name, voted) => {
  // Check if the person has already voted
  if (voted[name]) {
    return "Prohibit to vote"; // If already voted, return a message prohibiting voting
  } else {
    voted[name] = true; // Set the value to true to indicate the person has voted
    return "Allow to vote"; // Return a message allowing voting
  }
};

// Check the voting eligibility for different individuals and print the result
console.log(allowVote("James", isVotedTable));
console.log(allowVote("Mike", isVotedTable));
console.log(allowVote("John", isVotedTable));
console.log(allowVote("John", isVotedTable));

// Print the updated voting status table
console.log(isVotedTable);
