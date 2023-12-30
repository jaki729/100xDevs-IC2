/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = []; // Initializes an empty array to store todos
  }

  add(todo) {
    this.list.push(todo); // Adds a new todo to the end of the list
  }

  remove(index) {
    this.list.splice(index, 1); // Removes a todo at the specified index from the list
  }

  update(index, updatedTodo) {
    // Updates the todo at the given index with the provided updatedTodo
    if (index >= this.list.length) return; // Checks if the index is within bounds
    this.list[index] = updatedTodo;
  }

  getAll() {
    return this.list; // Returns the entire list of todos
  }

  get(index) {
    // Retrieves the todo at the specified index
    if (index >= this.list.length) return null; // Checks if the index is within bounds
    return this.list[index];
  }

  clear() {
    this.list = []; // Clears the entire list of todos by assigning an empty array
  }
}


module.exports = Todo;
