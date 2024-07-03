class Task {
    constructor(description, completed = false) {
      this.description = description;
      this.completed = completed;
    }
  
    markAsCompleted() {
      this.completed = true;
    }
  
    displayTask() {
      console.log(`Tarea:\n ${this.description} - ${this.completed ? 'Completada' : 'Pendiente'} \n`);
    }
  }
  
  module.exports = Task;
  