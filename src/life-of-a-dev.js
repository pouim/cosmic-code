// src/life-of-a-dev.js

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