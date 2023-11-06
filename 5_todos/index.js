const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const open_file = "todo.json";
function readTasks() {
  try {
    const todo_file = fs.readFileSync("todo.json");
    return JSON.parse(todo_file);
  } catch (err) {
    return [];
  }
}

function writeTasks(tasks) {
  fs.writeFileSync(open_file, JSON.stringify(tasks, null, 2));
}

function listTasks() {
  tasks = readTasks();
  if (tasks.length == 0) {
    console.log("No tasks in the file");
  } else {
    console.log("Todo List:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  rl.prompt();
}

function addTasks(task) {
  const tasks = readTasks();
  tasks.push(task);
  writeTasks(tasks);
  console.log(`Added the task ${task}`);
  rl.prompt();
}

function deleteTasks(idx) {
  const tasks = readTasks();
  if (idx >= 0 && idx < tasks.length) {
    delete_task = tasks.splice(idx, 1);
    writeTasks(tasks);
    console.log(`The following task has been deleted: ${delete_task}`);
  } else {
    console.log("Invalid task index");
  }
  rl.prompt();
}

function handleUserInput(input) {
  const command = input.split(" ")[0].toLowerCase();
  const task = input.split(" ").slice(1).join(" ");

  switch (command) {
    case "list":
      listTasks();
      break;
    case "add":
      if (task) {
        addTasks(task);
      } else {
        console.log("Please provide a valid task to add");
        rl.prompt();
      }
      break;
    case "delete":
      const index = parseInt(task, 10) - 1;
      if (!isNaN(index)) {
        deleteTasks(index);
      } else {
        console.log("Please provide a valid id to delete the task");
        rl.prompt();
      }
      break;
    case "quit":
      rl.close();
      break;
    default:
      console.log(
        "Invalid command. Available commands: list, add, delete, quit",
      );
      rl.prompt();
  }
}

console.log("Welcome to the to-do list application!");
rl.prompt();
rl.on("line", handleUserInput);
