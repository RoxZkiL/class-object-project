const Task = require('./task');
const TaskManager = require('./taskmanager');

const taskManager = new TaskManager();

const task1 = new Task('Hacer la compra');
const task2 = new Task('Pasear al perro');

task1.markAsCompleted();

taskManager.addTask(task1);
taskManager.addTask(task2);

taskManager.listTasks();

taskManager.markTaskAsCompleted(task1.description);
taskManager.markTaskAsCompleted(task2.description);
taskManager.markTaskAsCompleted("cualquiercosa");

taskManager.listTasks();
