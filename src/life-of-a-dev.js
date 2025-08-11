// src/life-of-a-dev.js


function drinkCoffee() {
  console.log("Drinking coffee...");
}

function drinkMoreCoffee() {
  console.log("Drinking even more coffee...");
}

function code(task) {
  console.log(`Coding a task with complexity ${task.complexity.toFixed(2)}...`);
}
function getTask() {
  // ...fetches an endless stream of feature requests
  return { complexity: Math.random() * 100 };
}

let isTired = true;
let tasksCompleted = 0;

while (isTired) {
  drinkCoffee();
  const task = getTask();
  
  if (task.complexity > 50) {
    drinkMoreCoffee();
  }
  
  code(task);
  tasksCompleted++;

  if (tasksCompleted > 10) {
    isTired = false; // Just kidding, this never happens.
  }
}