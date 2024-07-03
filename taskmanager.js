class TaskManager {
  constructor() {
    this.array = [];
  }

  addTask(task) {
    this.array.push(task);
  }

  listTasks() {
    this.array.forEach(tarea => tarea.displayTask());
  }

  markTaskAsCompleted(description) {
    const tarea = this.array.find(tarea => tarea.description === description);
    tarea ? tarea.markAsCompleted() : null;
    console.log(`Tarea del taskManager: \n ${tarea ? "Esta tarea existe" : "Esta tarea no existe"} \n`);
  }
}

module.exports = TaskManager;
