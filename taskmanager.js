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
    if(tarea) {
      tarea.markAsCompleted();
      console.log(`Esta tarea ${tarea.description} fue completada`)
    } else {
      console.log(`Esta tarea ${description} no existe y no fue completada`);
    }
  }
}

module.exports = TaskManager;
